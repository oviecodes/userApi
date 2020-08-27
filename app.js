const express = require('express')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')

//app
const app = express();

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set up mongo db connection using mongoose
mongoose.connect('mongodb://localhost:27017/userApi', {useNewUrlParser: true, useUnifiedTopology: true});


app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`app is running on ${port}`)
})