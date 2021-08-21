const express = require('express');
const app = express();
const logger = require('./middleware/logger');
require('dotenv').config();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on Port : ${PORT}`));