const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB')
});

const corsOptions ={
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/users', router)

const port = 4000
const server = app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})