require('dotenv').config()
const express = require('express')
const app = express()
const tasksRouter = require('./router/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorhandler')



app.use(express.json()) // json parsing middleware
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasksRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`Server is listening to the ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()