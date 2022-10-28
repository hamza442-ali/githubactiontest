
const Schema =mongoose.Schema



const movieSchema = new Schema (

{

ID:{
    type: Number,
    required: true,
},

Date:{
    type: Date,
    required: true,
},

movie:{
    type:Schema.Types.ObjectID,
    ref:'Movie',
}
});

const movieOrder = mongoose.model('movieOrder',movieOrder)
module.exports=movieOrder;