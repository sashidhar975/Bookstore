
const mongoose = require('mongoose');

const bookStoreSchema = new mongoose.Schema({
  // title, author, summary
  title:{
    type: String,
    required: true
  },
  author:{
    type:String,
    required:true
    },
  summary:{
    type:String,
    required:true

  }
});

module.exports = mongoose.model('Book',bookStoreSchema);
