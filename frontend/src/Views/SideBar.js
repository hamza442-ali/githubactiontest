
import React from "react";
import { Route, Routes } from "react-router-dom";
import '../CSS/Dashboard.css';
import {Ret} from '../Views/check'
import { Link } from "react-router-dom";
import { NavSearch} from '../Views/searchNav';
import {Home} from './HomeBuyer.jsx'

import { JobReqDisplay } from '../Views/fetchJobsRequests';
import { JobRequest } from "./AddJobRequest";

export const  BuyerSidebar =()=>{
  
    return(
      <div className="parent">
              
            <div className ="sidebar"> 
           

                <div class="logo-details">
                <i class='bx bxl-c-plus-plus'></i>
                <span class="logo_name">Workaholic</span>
                </div>

                <ul class="nav-links">

                  <li> 
                    <Link to='/Dashboard'>
                      <i class='bx bx-grid-alt' ></i>
                      <span class="links_name">Dashboard</span>
                    
                    </Link>
                  </li>

                  <li>

                    <Link to="/jobs" >

                     <i class='bx bx-box' ></i>
                     <span class="links_name">Display Jobs</span>
                    
                    </Link>

                    {/* <Link type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="links_name">Jobs</span>
                    <i class='bx bx-box' ></i>
                    </Link>
                      <div  aria-labelledby="dropdownMenuButton">
                        <Link to="/jobDisplay"  ><span class="links_name">Display Jobs</span></Link>
                        <Link to="/add" ><span class="links_name">Add Jobs</span></Link>
                    
                      </div> */}


                  </li>

                  <li>
                      <Link to="/add" >

                            <i class='bx bx-box' ></i>
                            <span class="links_name">Add Jobs</span>

                      </Link>


                  </li>

                </ul>   
            </div>

            
           <div className="inner">
                  <NavSearch/> 
                        
                  <div  className="coco">
                        <Routes>
                            <Route path="/Dashboard" element={<Home/>}/>
                            <Route path="/jobs" element={< JobReqDisplay />}/>
                            <Route path="/add" element={<JobRequest />}  /> 
                        </Routes> 

                  </div>    
                  
             </div>         
      </div>
    )
  
  } 
     
