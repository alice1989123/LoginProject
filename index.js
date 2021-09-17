const express = require('express');
const app = express();
app.use(express.json());
// Run the server
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// Import Routes
const authRoute = require('./routes/auth');
const restrictedRoute = require('./routes/restricted')
dotenv.config();
//Connect to DB
mongoose.connect( process.env.DB_CONNECT , {useNewUrlParser : true} ,
 () => console.log( 'connected to DB!'));
//Route Middlewares
app.use('/api/user', authRoute );
app.use('/api', restrictedRoute);
//Middlewares

app.listen(8000, () => {
  console.log('Server listening on port 8000!')
});