
import {BuyerSidebar} from './Views/SideBar';
import React from 'react';


export const Dashboard = ()=>{

    return(         
        <>
                <div className="App">
                
                <body>
                <BuyerSidebar/>
                <section class="home-section">
            <nav>
                <div class="sidebar-button">
                <i class='bx bx-menu sidebarBtn'></i>
                <span class="dashboard">Dashboard</span>
                
                </div>

                <div>
                <a href="/about" class="active" method="post" >
                        <i class='bx bx-grid-alt' ></i>
                        <span class="links_name">about</span>
                </a>
                
                </div>


                <div class="search-box">
                <input type="text" placeholder="Search..."></input>
                <i class='bx bx-search' ></i>
                </div>
                <div class="profile-details">
                <img src="images/profile.jpg" alt=""></img>
                <span class="admin_name">Hamza</span>
                <i class='bx bx-chevron-down' ></i>
                </div>
            </nav>
            </section>

                </body>


            </div>

            </>


    )
};