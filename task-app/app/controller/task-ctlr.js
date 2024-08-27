
const Task=require('../model/task-model')
const {validationResult}=require('express-validator')
const tasksCltr={}

tasksCltr.lists=(req,res)=>{
  Task.find()
  .then(task=>{
    res.status(201).json(task)
  })
  .catch(err=>{
    res.json(err)
  })

}
tasksCltr.deletelist=(req,res)=>{
  const id=req.params.id
  Task.findByIdAndDelete(id)
  .then(task=>{
    res.status(201).json(task)
  })
  .catch(err=>{
    res.json(err)
  })
}
tasksCltr.singlerecord=(req,res)=>{
  const errors=validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const id = req.params.id
Task.findById(id)
.then(task=>{
  res.status(201).json(task)
})
.catch(err=>{
  console.log(err)
  res.status(500).json({error:'something went wrong'})
})
}

tasksCltr.updatelist=(req,res)=>{
  const errors=validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }


const id=req.params.id
const body=req.body

Task.findByIdAndUpdate(id,body,{new:true})
.then(task=>{
  res.status(201).json(task)
})
.catch(err=>{
  console.log(err)
  res.status(500).json({error:'something went wrong'})
}
)
}
tasksCltr.postlist=(req, res) => {
  const errors = validationResult(req) 
  if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()})
  }

  const body = req.body 
  const task = new Task(body)
  task.save()
      .then((task) => {
          res.status(201).json(task)
      })
      .catch((err) => {
          // console.log(err) - bug track tools - like bugsnag
          res.status(500).json({ error: 'Something went wrong'}) 
      })
}
module.exports=tasksCltr