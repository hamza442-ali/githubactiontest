
import React from "react";
import { Route, Routes } from "react-router-dom";
import '../CSS/Dashboard.css';
import {Ret} from '../Views/check'
import { Link } from "react-router-dom";
import { NavSearch} from '../Views/searchNav';
import {Home} from './HomeBuyer.jsx'

export const  BuyerSidebar =()=>{
  
    return(
       <>
               
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

                    <Link to="/jobs">

                     <i class='bx bx-box' ></i>
                     <span class="links_name">Jobs</span>
                    
                    </Link>

                  </li>


                </ul>



              
              

            </div>

            <section className="Home-section">

                <Routes>
                    <Route path="/Dashboard" element={<Home/>}/>
                    <Route path="/jobs" element={<Ret/>}/>
                </Routes>

              </section>


                <NavSearch/>

            </>



      // <>
      //   <div class="sidebar">
      //   <div class="logo-details">
      //     <i class='bx bxl-c-plus-plus'></i>
      //     <span class="logo_name">Workaholic</span>
      //   </div>
      //     <ul class="nav-links">
      //       <li>
      //         <a href="/#" class="active">
      //           <i class='bx bx-grid-alt' ></i>
      //           <span class="links_name">Dashboard</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/#"  class="jobs">
      //           <i class='bx bx-box' ></i>
      //           <span class="links_name">Jobs</span>
      //         </a>
      //       </li>

            
      //        <li>
      //         <a href="/#">
      //           <i class='bx bx-list-ul' ></i>
      //           <span class="links_name">Order list</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/#">
      //           <i class='bx bx-pie-chart-alt-2' ></i>
      //           <span class="links_name">Analytics</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/#">
      //           <i class='bx bx-coin-stack' ></i>
      //           <span class="links_name">stand for Stock</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/#">
      //           <i class='bx bx-book-alt' ></i>
      //           <span class="links_name">Total order</span>
      //         </a>
      //       </li>
           
      
      //       <li class="log_out">
      //         <a href="/#">
      //           <i class='bx bcleax-log-out'></i>
      //           <span class="links_name">Log out</span>
      //         </a>
      //       </li>
      //     </ul>
      // </div>

      // </> 

    )
  
  } 
     

    // export default BuyerSidebar;