
// Arrow Function 
export const Greet = (props) => {
    
    return(
    <div> 
         <h1>

         Hello {props.name} a.k.a {props.secondName}
         
        </h1>
        <p> {props.children}</p>
    </div>

    )

}


export const dashboard=()=>{

        return(

            

        )
    

}

//export default Greet

// Pass By Reference in js
// Javas Script is pass by reference for the objects

function passByRefrence(p1){

    p1.val="Hammad";



}

let a = {val : "Hamza"};
passByRefrence(a);
//console.log(a.val);





// Multiple Arguments

function sum(){

    for(let index=0; index<arguments.length; index++){

        //console.log(`argument #${index+1} : ${arguments[index]}`);
        console.log(`${arguments[index]}`);
    }

    return 'AloAlueya';
}



function sum2(...args){

    args.forEach(element => {
        console.log(element);
    })

    return 'Done';
}; 

//console.log(sum2(5,6,7,3,3));
