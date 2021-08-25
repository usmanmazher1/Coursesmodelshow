const express = require('express');
const app = express();
const dotenv = require('dotenv')
 dotenv.config({ path: './config/config.env' });
const path = require('path');
const mongodb = require('./mongodb');
const error = require('./middleware/Errorvalidate')
const Courserouter = require('./router/courserouter');
app.use(express.json());
mongodb();
app.use("/api/course",Courserouter);
app.use(express.static(path.join(__dirname, 'public')));
const Port = process.env.PORT;
app.listen(Port ||5000,()=> console.log("Server is start with Port given"));
