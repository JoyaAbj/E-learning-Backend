require('dotenv').config();
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;
require('./config/db');
const lessonRoutes = require('./routes/lessonRoute');

app.use(bodyParser.json());
app.use('/lesson', lessonRoutes)

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT} `);
})