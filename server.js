 require('./models/db');

 const express = require('express');
 const path = require('path');
 const exphbs = require('express-handlebars');

 const customerController = require('./controllers/employeeController');
 var app = express();
app.set('views');


 app.listen(3000,()=>{
     console.log('Express server started at port : 3000');
 });
 app.use('/customer',customerController);