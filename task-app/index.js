const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { checkSchema } = require('express-validator')
const configureDB=require('./config/db')
const Task=require('./app/model/task-model')
const tasksCltr=require('./app/controller/task-ctlr')
const {
  taskValidationSchema, 
  idValidationSchema
  }= require('./app/validator/task-validator')
const port = 3151
const app = express() 

app.use(express.json())
app.use(cors())
configureDB()

app.get('/api/tasks',tasksCltr.lists)

app.post('/api/tasks', checkSchema(taskValidationSchema), tasksCltr.postlist)

app.get('/api/tasks/:id', checkSchema(idValidationSchema), tasksCltr.singlerecord)

app.delete('/api/tasks/:id', checkSchema(idValidationSchema), tasksCltr.deletelist)

app.put('/api/tasks/:id', checkSchema(idValidationSchema), checkSchema(taskValidationSchema), tasksCltr.updatelist)

app.listen(port, () => {
    console.log('server running on port', port)
})

/*
app.get('/api/categories', () => { })
app.post('/api/categories', () => { })
app.get('/api/categories/:id', () => {})
app.put('/api/categories/:id, () => {})
app.delete('/api/categories/:id', () => {})

app.get('/api/expenses', () => { })
app.post('/api/expenses', () => { })
app.get('/api/expenses/:id', () => {})
app.put('/api/expenses/:id, () => {})
app.delete('/api/expenses/:id', () => {})
*/
