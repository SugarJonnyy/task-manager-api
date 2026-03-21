const express = require('express')
const app = express()
const tasksRouter = require('./router/tasks')

//router
app.get('/', (req, res)=>{
    res.send("task-manager-api")    
})

app.use('/api/v1/tasks', tasksRouter)
const port = 3000

app.listen(port, ()=>{
    console.log("Server is listening to the port");
})