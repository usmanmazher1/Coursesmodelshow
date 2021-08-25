const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('./mongodb');
const error = require('./middleware/Errorvalidate')
const Courserouter = require('./router/courserouter');
app.use(express.json());
mongodb();
app.use("/api/course",Courserouter);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(5000,()=> console.log("Server is start with 5000"));
