/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import path from 'path';
import { getDate } from './views/date.js';
import mongoose from 'mongoose';
const __dirname = path.resolve();


// Importing user route
import router from './routes/users.js';
//const router = require('router')
// const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//****************************************** */
//***************************************** */
//**************************************** */



// var items= ["Buy Food", "Cook Food", "Eat Food"];
// var workItems= [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

mongoose.connect("mongodb://localhost:27017/todoListDB", {useNewUrlParser: true});

const itemsSchema = {

    name: String
}
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({

    name: "Hamza is cteater of this list"
});

const item2 = new Item ({

    name: "Welcome to todo List"
});
const item3 = new Item ({

    name: "Press + to add new Item"
});

const defaultItems= [item1, item2, item3];

app.get("/", function(req, res){

    // let day = getDate();

    Item.find({}, function (err, foundItems){

            if(foundItems.length === 0){

                Item.insertMany(defaultItems, function (err){

                    if(err){
                        console.log(err);
                    }else{

                        console.log("Successfully saved default items to DB");
                    }

                    res.redirect("/");
                });
            }else{

                res.render("list", { listTitle: "Today",newListItem: foundItems });
                
            }


    });

   

});

app.post("/", function(req, res){

     
 
     const itemName= req.body.newItem;
     console.log(req.body.newItem);
    // var fatherName="Azam"
    
     const items = new Item({

        name: itemName,
       // fName: fatherName 
        
     });

     items.save();
     res.redirect("/");
    // if(req.body.list==="Work"){

    //     workItems.push(item);
    //     res.redirect("/work");

    // }else{

    //     //items.push(item);
    //     res.redirect("/");

    // }

});

app.post("/delete", function(req, res){

    const checkedItemId = req.body.checkbox;

    Item.findByIdAndRemove(checkedItemId, function(err){

        if(!err){

            console.log("Successfully deleted Item");
            res.redirect("/");
        }
       
    });
});

app.get("/work", function(req, res){

    res.render("list", {listTitle: "Work List", newListItem: workItems});
});

app.get("/about", function(req, res){

    res.render("about");
});