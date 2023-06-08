# Transport-dashboard
Dashboard in MERN to communicate between two users: Manufacturer and Transporter. Both will have different input forms for entering data.
Login and Registration Page: The user will have an option to choose either as 
Manufacturer or Transporter during registration.
Landing Page (Separate for manufacturer and transporter): List out all the messages 
received so far by showcasing order id which you can click and see the content. This 
should have option to search depending on order_id, To and From

For Manufacturer:
The input form will have 4 input fields and one send push button: 
1. Order ID: auto populate an Alphanumeric code (for ex: XB120)
2. To: 
3. From: 
4. Quantity: Drop down menu where he can choose 1,2,3 ton 
5. Address: Auto populate this field from the address entering during registration 
For Transporter: Drop down menu to select transporter. Here we can choose only 
single transporter.
If the manufacturer clicks the push button the message will go to the transporter.
 
For Transporter: 
1. Order ID: List box to select the order id received from the Manufacturer.
2. Price: input form, float value 
3. Reply Button for sending messages back to Manufacturer.

Getting Started
Install Dynamic Portfolio Web Application with npm

1: Clone the repository:

  git clone <url>
2: Install the dependencies:

  npm install
3: Start the server:

  node app.js
The application should now be running on port 3000
