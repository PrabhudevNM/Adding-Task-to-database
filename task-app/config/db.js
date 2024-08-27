const mongoose=require('mongoose')

const configureDB=()=>{mongoose.connect('mongodb://localhost:27017/mar25-task')
.then(()=>{
  console.log('db connected')
})
.catch((err)=>{
  console.log('error connecting',err)
})}

module.exports=configureDB