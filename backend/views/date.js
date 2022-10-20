
// This is the file 
   // module.exports.getDate= getDate;

    export  function getDate(){

    var today= new Date();

    var options = {

        weekday: "long",
        day: "numeric",
        month: "long"
    }; 


    var day= today.toLocaleDateString("en-US", options);

    return day;
}


//module.exports.getDay= getDay;
// export function getDay(){


//     var today= new Date();

//     var options = {

//         day: "numeric",
      
//     }; 


//     var day= today.toLocaleDateString("en-US", options);

//     return day;


//}