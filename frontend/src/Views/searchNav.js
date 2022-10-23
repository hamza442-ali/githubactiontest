
  import React from "react";
import '../CSS/Dashboard.css';

export const NavSearch=()=>{

    return(
   
      <> 
      <section class="home-section">
        <nav> 
        <div class="sidebar-button">
          <i class='bx bx-menu sidebarBtn'></i>
          <span class="dashboard">Dashboard</span>
          
        </div>
  
  
         <div class="search-box">
          <input type="text" placeholder="Search..."></input>
          <i class='bx bx-search' ></i>
        </div>
        <div class="profile-details">
          <img src="frontend\images\profile.jpg" alt=""></img>
          <span class="admin_name">Hamza</span>
          <i class='bx bx-chevron-down' ></i>
        </div>

        </nav>
        </section>
 
        </>


    )};



