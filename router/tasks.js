const express = require('express')
const route = express.Router()
const {getAllTasks} = require('../controllers/tasks')


route.get('/', getAllTasks)

module.exports = route