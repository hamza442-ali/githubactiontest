
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
const __dirname = path.resolve();

// Importing user route
import router from './routes/users.js';

const app = express()
app.use( express.static('public'));

// var abPath='E:\\Semester#5\\assignment-1-hamza442-ali\\frontend\\src';

// app.set('views', path.join(abPath, 'Views'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

const port = 3001
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Application is running on port:  ${port}`)
})



mongoose.connect("mongodb://localhost:27017/jobdb" , {useNewUrlParser :true});
    
    const jobRequestSchema = new  mongoose.Schema({
       title: String,
       skill: String,
       estimation: String,
       budget: String,
       description: String,
     });

 const JobPost=mongoose.model("JobPost",jobRequestSchema);

// This is the basic function to store data in Database posted by Buyer.
app.post("/jobstore", function(req, res){


     const row1=new JobPost({
        title:req.body.name,
        skill:req.body.skill,
        estimation:req.body.estimation,
        budget: req.body.budget,
        description: req.body.description,
     });

       row1.save(); 
       res.redirect("/");
        
     });

     app.post('/jobDisplay', (req, res) => {    
          const g = JobPost.find(function(err, use){

            if(err){
    
                console.log('Check');
    
            }else{
    
             console.log('getting data for display');
            res.send(use);
            }
    
        });   
    })


    app.delete("/deleteJob",  async function(req, res){

        const checkedItemId = req.body.Title;
    
        console.log(checkedItemId +" this is")
        
        JobPost.findOneAndRemove({title: req.body.Title}, function(err,use){

            if(err){

                
            }else{
                res.send(use);
                
            }
        })

    
    });
     app.route("/jobRequest").get(function (req, res) {
        // console.log("aa gaye ho")
        // let db_connect = dbo.getDb("jobdb");
        db_connect
        .collection("jobPost")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            console.log(result)
            res.json(result); 
        });
    });

// app.get("/jobstore", function(req, res){
    
//     JobPost.find({}, function (err, foundItems){

//         if(foundItems.length === 0){

//             console.log("There is no item in database");
//             res.redirect("/");
            
//         }else{

            
//             res.render("JobReqDisplay", { newListItem: foundItems });
          
            
//         }

//     });

// });





     
// Adding a Router
// app.use('/users', router);

// app.get('/', (req, res) => {
//     res.send('Hello Universe!')
// })

// app.get('/todos', (req, res) => {
//     res.send('A list of todo items will be returned')
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })




//****************************************** */
//***************************************** */
//**************************************** */



// var items= ["Buy Food", "Cook Food", "Eat Food"];
// var workItems= [];


//mongoose.connect("mongodb://localhost:27017/todoListDB", {useNewUrlParser: true});

// const itemsSchema = {

//     name: String
// }
// const Item = mongoose.model("Item", itemsSchema);

// const item1 = new Item ({

//     name: "Hamza is cteater of this list"
// });

// const item2 = new Item ({

//     name: "Welcome to todo List"
// });
// const item3 = new Item ({

//     name: "Press + to add new Item"
// });

// const defaultItems= [item1, item2, item3];

// app.get("/", function(req, res){

//     // let day = getDate();

//     Item.find({}, function (err, foundItems){

//             if(foundItems.length === 0){

//                 Item.insertMany(defaultItems, function (err){

//                     if(err){
//                         console.log(err);
//                     }else{

//                         console.log("Successfully saved default items to DB");
//                     }

//                     res.redirect("/");
//                 });
//             }else{

//                 res.render("JobReqDisplay", { listTitle: "Today",newListItem: foundItems });
                
//             }


//     });

   

// });



// app.post("/", function(req, res){

     
 
//     const itemName= req.body.newItem;
//     console.log(req.body.newItem);
  
   
//     const items = new Item({

//        name: itemName,
//       // fName: fatherName 
       
//     });

//     items.save();
//     res.redirect("/");
   

// });





    //  items.save();
    //  res.redirect("/");
    // if(req.body.list==="Work"){

    //     workItems.push(item);
    //     res.redirect("/work");

    // }else{

    //     //items.push(item);
    //     res.redirect("/");

    // }




app.get("/work", function(req, res){

    res.render("list", {listTitle: "Work List", newListItem: workItems});
});

app.get("/about", function(req, res){

    res.render("about");
});