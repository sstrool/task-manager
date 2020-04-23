// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const  {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'tasks'

// const id = new ObjectID()
// console.log(id.id.length);
// console.log(id.toHexString().length);



MongoClient.connect(connectionURL,{ useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database');
    }
  
    const db = client.db(databaseName)

    // db.collection('tasks').updateMany( {
    //     Completed: false
    // }, {
    //     $set: {
    //         Completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
  
    // db.collection('users').deleteMany({
    //     Age: {$gt: 54}
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        Description: "Learn Hooli"
    }).then((result) => {
        console.log(result)
    }).catch((error) =>
    console.log(error)
    )
})