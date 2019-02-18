//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//url, ()=>{}
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db= client.db('TodoApp');

  //findOneAndUpdate(filter, update, options, callback) -> promise
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5c6aabe20a76d5329d3a7c26')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5c6a9c04a3db033774e6fa90')
  },{
    $set: {
      name: 'Vikas'
    },
    $inc: {age: 1}
  },{
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  console.log('Closing MongoDB');
  client.close();
});
