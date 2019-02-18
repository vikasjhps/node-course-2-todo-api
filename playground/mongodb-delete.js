//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//url, ()=>{}
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db= client.db('TodoApp');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Vikas Kumar'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  db.collection('Users').deleteOne({
    _id : new ObjectID('5c6aa02e102ce6221461b7f8')
  }).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  console.log('Closing MongoDB');
  client.close();
});
