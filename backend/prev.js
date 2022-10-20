
    
    import express from 'express';
    import bodyParser from 'body-parser';
    import path from 'path';
    import { getDate } from './views/date.js';
    import mongoose from 'mongoose';
    const __dirname = path.resolve();

    const app= express();
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



    app.listen(3001, function(){

        console.log("Server started on port 3001");
    });




            // var currentDay= today.getDay();
        // var day="";

        // if(today.getDay() === 6 || today.getDay()==0){
        //     //res.send("Yey!! it is the weekend");
        //     var day="weekend";
        // }else{
        // //  res.sendFile(__dirname + "/index.html");

        //     var day="weekday";
        // }

        // switch(currentDay){

        //     case 0: 
        //         day="Sunday";
        //         break;
        //     case 1: 
        //         day="Monday";
        //         break;
        //     case 2: 
        //         day="Tuesday";
        //         break;
        //     case 3: 
        //         day="Wednesday";
        //         break;
        //     case 4: 
        //         day="Thursday";
        //         break;
        //     case 5: 
        //         day="Friday";
        //         break;
        //     case 6: 
        //         day="Saturday";
        //         break;
        //     default:
        //         day="Error";

        // }
