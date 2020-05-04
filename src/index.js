const express = require('express')
require ('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,() => {
  console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const func = async () => {
  const token = jwt.sign({_id: 'xxx123'}, 'x8675309x', {expiresIn: '1 day'})
  console.log(token);

  console.log(jwt.verify(token, 'x8675309x'))
  
}

func()