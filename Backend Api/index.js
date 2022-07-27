const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')

const mongoose = require('mongoose')
const mongoUri = 'mongodb://127.0.0.1:27017/mernTest'

mongoose.connect(mongoUri, () => {
    console.log("DB is connected")
})

app.use(express.json());
app.use('/api', userRouter);


app.listen(5000, () => {
    console.log("Server is running on Port 5000")
})