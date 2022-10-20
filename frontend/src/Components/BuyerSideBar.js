
import React from "react";
import '../CSS/Dashboard.css';

export const BuyerSidebar=()=>{

    return(

       <>
        <div class="sidebar">
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Workaholic</span>
        </div>
          <ul class="nav-links">
            <li>
              <a href="/#" class="active">
                <i class='bx bx-grid-alt' ></i>
                <span class="links_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/#"  class="jobs">
                <i class='bx bx-box' ></i>
                <span class="links_name">Jobs</span>
              </a>
            </li>

            
            {/* <li>
              <a href="/#">
                <i class='bx bx-list-ul' ></i>
                <span class="links_name">Order list</span>
              </a>
            </li>
            <li>
              <a href="/#">
                <i class='bx bx-pie-chart-alt-2' ></i>
                <span class="links_name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="/#">
                <i class='bx bx-coin-stack' ></i>
                <span class="links_name">stand for Stock</span>
              </a>
            </li>
            <li>
              <a href="/#">
                <i class='bx bx-book-alt' ></i>
                <span class="links_name">Total order</span>
              </a>
            </li>
           */}
      
            <li class="log_out">
              <a href="/#">
                <i class='bx bcleax-log-out'></i>
                <span class="links_name">Log out</span>
              </a>
            </li>
          </ul>
      </div>

      </>

    )};