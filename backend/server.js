const express = require ('express')
const colors = require('colors')
const dotenv = require ('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5050;

connectDB();
const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/dogs', require('./routes/dogRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))