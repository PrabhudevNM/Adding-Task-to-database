
const taskValidationSchema={
    title:{
      in:['body'],
      exists:{
        errorMesssage:'title feild is required'
      },
      notEmpty:{
        errorMesssage:'title cannot be empty'
      },
      trim:true
    },
    description:{
      in:['body'],
      exists:{
        errorMesssage:'description feild is required'
      },
      notEmpty:{
        errorMesssage:'description cannot be empty'
      },
      trim:true
    },
    status:{
      in:['body'],
      exists:{
        errorMesssage:'status feild is required'
      },
      notEmpty:{
        errorMesssage:'status cannot be empty'
      },
      isIn:{
        options:[['pending','in-progress','completed']],
        errorMesssage:'status should be one of the pending,in-progress,completed'
      }
    }
  
  }
  
  const idValidationSchema={
   id:{
    in:['params'],
   isMongoId:{
    errorMesssage:'invalid id format'
   }}
  }
  
  module.exports={
    taskValidationSchema,
    idValidationSchema
  }