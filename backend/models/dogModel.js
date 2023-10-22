const mongoose = require ('mongoose');

const dogsSchema = mongoose.Schema({
   id:{
      type: String,
      required: true,
      unique: true,
   },
     name:{
        type: String,
        required: true,
     },
     age:{
      type: String,
      required: true,
   },
   breed:{
      type: String,
      required: true,
   },
},
{
   timestamps: true,
})

module.exports = mongoose.model('Dogs', dogsSchema)