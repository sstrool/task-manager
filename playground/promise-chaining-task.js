require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ea1dd7bb6af3611b6e64c7f' ).then((task) => {
//   console.log(task)
//    return (Task.countDocuments({ completed: false }))
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments( { completed: false })
  return count
}

deleteTaskAndCount('5ea6fae183aebd51ac9ac52f').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
}) 