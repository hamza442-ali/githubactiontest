const mongoose=require('mongoose')

const Schema =mongoose.Schema



const movieSchema = new Schema (

{

title:{
    type: String,
    required: true,
},
ID:{
    type: Number,
    required: true,
},

year:{
    type: Number ,
    required: true,
},

rating: {
    type: Number ,
    required: true,
},


genre:{
    type:String,
    required:true,
} 
});

const movie = mongoose.model('movie',movie)
module.exports=movie