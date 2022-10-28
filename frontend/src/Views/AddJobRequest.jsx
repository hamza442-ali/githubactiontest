
import { useState } from 'react';
import '../CSS/AddJobRequest.css';


export const  JobRequest = ()=>{

const[getskill, setskill]= useState();
const [getname, setname]= useState();
const [getdescription, setdescription]= useState();
const [getbudget,setbudget]=useState();
const [getestimation, setestimation]= useState();


function updateName(event){

    setname(event.target.value);

}

function updateSkill(event){

  setskill(event.target.value);
  
}

function updateBudget(event){

  setbudget(event.target.value);
  
}

function updateEstimation(event){

  setestimation(event.target.value);

}

function updateDescription(event){

  setdescription(event.target.value);

}


    const  getJob=()=>{
   
      console.log('calling apis')
        const data1 = {name : getname, skill:getskill, budget: getbudget , estimation: getestimation ,description : getdescription}

        fetch('/jobstore', {
          method: 'POST', // or 'PUT' 
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data1),
        })
          .then((response) => response.json())
          .then((data) => {
            // catch data from post method
          })
          .catch((error) => {
            console.error('Error:', error);
          });

      }


    return(
        
     <form class="form-style-9">
        <ul>
            <li>
                <input   value={getname}  onChange={updateName} name="name" class="field-style field-split align-left" placeholder="Title of your project" />
                <input   value={getskill} onChange={updateSkill}  name="skill"  class="field-style field-split align-right" placeholder="Add Required Skills" />

            </li>

            <li>
                  <input value={getestimation}  onChange={updateEstimation} name="estimation" class="field-style field-split align-left" placeholder="Estimation of the project?" /> 
                  <input value={getbudget}  onChange={updateBudget} name="budget" class="field-style field-split align-right" placeholder="Budget of your project" /> 
            </li>

            <li>
                  <textarea value={getdescription} onChange={updateDescription} name="description" class="field-style" placeholder="Description"></textarea>
            </li>

            <li>
                <button onClick={getJob}  class="submitJob">Submit</button>
              
            </li>
            
         </ul>
    </form>
        
    )


}