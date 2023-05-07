const express= require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const app = express();

//inportando routes
const customerRoutes = require('./routes/customer');


// //settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// // middlewares (son funciones que se ejecutan antes de las peticiones de los usuarios)
app.use(morgan('dev'));
app.use(myconnection(mysql,{
    host:'localhost',
    user:'root',
    password:'sebas2004',
    port:3306,
    database:'website'
}, 'single'));
app.use(express.urlencoded({extended:false}));


// // routes
app.use('/',customerRoutes);


// //archivos estaticos
app.use(express.static(path.join(__dirname,'public')));



//Empezando el servidor
app.listen(3000,()=>{
    console.log('Server started on port 3000');
})