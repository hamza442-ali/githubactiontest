


import { Link ,  useNavigate} from 'react-router-dom';
import '../CSS/about.css';
import '../CSS/Dashboard.css'
import { Route, Routes } from "react-router-dom";
import { JobRequest } from '../Views/AddJobRequest';
import { Ret } from './check';
import React, { useEffect } from 'react';


export const  JobReqDisplay = ()=>{

   
        const location=useNavigate();

        const [jobInfo,setJobData]= React.useState([{}]);

        console.log('calling apis Fetch Jobs Class')

        const data1={};
        useEffect(()=>{
            fetch('/jobDisplay', {
                method: 'POST', // or 'PUT' 
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(data1),
              })
                .then((response) => response.json())
                .then((data) => {
    
                    setJobData(data);
                    console.log(data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });    


        },[]);

        const  deleteJob = async (props) => {
    

            const d = {
       
               Title : props
       
             }
       
       
             if(typeof d === 'undefined'){
       
       
               console.log('Error!!');
       
       
             }
       
             console.log("Data "+d.Title);
       
             await fetch('/deleteJob', {
                method: 'delete', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(d),
          })
            .then((response) => response.json())
            .then((data) => {
    
              //console.log(data);
              console.log("Im  Fetching Data")
              
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    
            
    
        }
          
return(
     <>
     <br></br>
     <Link to="/addjob" className='addButton'>Post a Job</Link>
     <Link to="/display" className='displayButton'>Display Jobs</Link>
    


     <div className="inner">

            <div  className="coco">
                    
                <Routes>
                      <Route path="/addjob" element={<Ret/>}/>
                      <Route path="/display" element={<Ret/>}/>
                </Routes> 
                    
            </div>

     </div>
    
     
     <br></br>
     <br></br>
     <h1> Posted Jobs  </h1> 
    {jobInfo.map((data, index)=>{


        return  <div class="column">
        <div class="card">

            <div class="container">
                <h2>{data.title}</h2>
                <p class="title">{"Budget: " + data.budget}</p>
                <p>{"Required Skills: "+data.skill}</p>
                <p>{data.description}</p>
                <br/>
                <p align="right">
                <button class="buttonJob" onClick={(e)=>{deleteJob(data.title)}}>Delete</button>
                <button class='buttonJob'>Edit</button>
                </p>
                <br></br>
            </div>
        </div>
        </div>



})}
   
    </>
)

}

   