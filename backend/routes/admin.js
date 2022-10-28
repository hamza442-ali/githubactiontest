// const router = require('express').Router();
// import { Router } from 'express';

// import { Router } from 'express';
// //let movie=require('../models/movie');
// import movie from '../models/movie';
// import movieOrder from '../models/movieOrder';
// //let movieOrder=require('../models/movieOrder');

// //for movie
// Router.route('/add').post((req,res) => {
    

    
//     const title=req.body.Title;
//     const year= Number(req.body.year);
//     const rating=Number(req.body.Rating);
//     const genre=(req.body.Genre);
//     const newmovie = new movie({
//         title,
//         year,
//         rating,
//         genre,
//     });


//     newmovie.save().then(()=>res.json('Movie added'))
//     .catch(err=>res.status(400).json('Error: '+err));
// });
// // uodateOne==> can be done by this built in function
// Router.route('/update/:id').post((req,res)=>{
//     movie.findBYID(req.params.ID).then(movie => {
//         movie.Id=Number(req.body.ID);
//         movie.title=req.body.Title;
//         const year= Number(req.body.year);
//         movie.date=Date.parse(req.body.date);
//         const rating=Number(req.body.Rating);
//         const genre=(req.body.Genre);

//         movie.save().then(()=>res.json('Movie updated!')).catch(err=>res.status(400).json('Error: '+err));
//     })
//     .catch(err=>res.status(400).json('Error: '+err));
// })


// module.exports=Router;