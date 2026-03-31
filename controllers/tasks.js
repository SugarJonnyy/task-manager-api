const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomAPIError } = require('../errors/customErrorHandler')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => { // Added 'next'
  const { id: taskID } = req.params; // Standardized to match your other routes
  const task = await Task.findOne({ _id: taskID }); // Fixed double underscore
  
  if (!task) {
    return next(createCustomAPIError(`There is no task with ${taskID}`, 404));
  }
  
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => { // Added 'next'
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  
  if (!task) {
    return next(createCustomAPIError(`There is no task with ${taskID}`, 404));
  }
  
  res.status(200).json({ task }); // Added curly braces
});

const deleteTask = asyncWrapper(async (req, res, next) => { // Added 'next'
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete(taskID);
  
  if (!task) {
    return next(createCustomAPIError(`There is no task with ${taskID}`, 404));
  }
  
  res.status(200).json({ task }); // Added curly braces
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};