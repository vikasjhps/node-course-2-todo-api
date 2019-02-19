var mongoose = require('mongoose');

var User = mongoose.model('Users',{
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  }
});

module.exports ={User};
