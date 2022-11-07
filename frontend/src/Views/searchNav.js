
  import React from "react";
import '../CSS/Dashboard.css';


export const NavSearch=()=>{

    return(

   
      <div className="wrapper"> 
      <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <nav> 
        <div class="sidebar-button">
          <i class='bx bx-menu sidebarBtn'></i>
          <span class="dashboard">hnchgffgh Portal</span>
          
        </div>
  
         <div class="search-box">
          <input type="text" p  laceholder="Search.."></input>
          <i class='bx bx-search' ></i>
        </div>
        <div class="profile-details">
          <img src="../../images/profile.jpg" alt=""></img>
          <span class="admin_name">Hamza</span>
          <i class='bx bx-chevron-down' ></i>
        </div>

        </nav>
     
 
        </div>


    )};



