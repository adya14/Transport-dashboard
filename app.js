require('dotenv').config();
const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const sessions = require('express-session')
const flash = require('connect-flash')
const bodyParser = require('body-parser') 
const methodOverride = require('method-override')
const auth = require('./routes/authRoutes')
const manufacturerRoutes = require('./routes/manufacturerRoutes')
const transporterRoutes = require("./routes/transporterRoutes");
const PORT = 3000
const oneMonth = 1000*60*60*60*24*30

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({extended : true}))
app.use(flash())
app.use(sessions({
    name : 'userSession',
    secret : process.env.My_SECRET,
    saveUninitialized : false,
    cookie : {maxAge : oneMonth}
}))

app.use(methodOverride('_method'))

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {
    let message = req.flash('message')
    let alertMessage = req.flash('alertMassage')

    if(req.session.email){
        res.redirect(`/${req.session.user}/dashboard`)
    } else{
        res.render('index', {
            loginOption : "Register",
            message : message,
            alertMessage : alertMessage
        })  
    }
})

app.use('/auth', auth)

app.use('/manufacturer', manufacturerRoutes)

app.use('/transporter', transporterRoutes)

app.listen(PORT, () => {
    console.log(`Port is running on http://localhost:${PORT}`);
})