require('dotenv').config()
const express = require('express')
const app = express()
const tasksRouter = require('./router/tasks')
app.use(express.json()) // json parsing middleware
const connectDB = require('./db/connect')

//router
app.get('/', (req, res)=>{
    res.send("task-manager-api")    
})

app.use('/api/v1/tasks', tasksRouter)
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