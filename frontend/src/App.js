
import './App.css';
import React, { Component }  from 'react';
import {BuyerSidebar} from './Views/SideBar';
//import { NavSearch } from './Views/searchNav';
import {  Link, Route, Routes } from 'react-router-dom';
import { NavSearch} from './Views/searchNav';
import { JobRequest } from './Views/AddJobRequest';



export const App =()=>{
      return (

        <div>

          <JobRequest/>
          {/* <BuyerSidebar/> */}
{/* 
        <Link to='/check'>
              
             Hamza 
             
        </Link>
       
          <Routes>
              <Route path='/check' exact element={<BuyerSidebar/>}/>
          </Routes> */}

          </div>

        // <BuyerSidebar/>
        // <NavSearch/>
        // </>

        // //  <Routes>
            
        // //    <Route  path='/' element={<BuyerSidebar/>}/>
          
          
        // //  </Routes>


        

      );

  }


 export default App;





    
    // <div className="App">
     
    //   <body>
    //      <BuyerSidebar/>
    //      <section class="home-section">
    // <nav>
    //   <div class="sidebar-button">
    //     <i class='bx bx-menu sidebarBtn'></i>
    //     <span class="dashboard">Dashboard</span>
        
    //   </div>

    //   <div>
    //   <a href="/about" class="active" method="post" >
    //             <i class='bx bx-grid-alt' ></i>
    //             <span class="links_name">about</span>
    //   </a>
      
    //   </div>


    //    <div class="search-box">
    //     <input type="text" placeholder="Search..."></input>
    //     <i class='bx bx-search' ></i>
    //   </div>
    //   <div class="profile-details">
    //     <img src="images/profile.jpg" alt=""></img>
    //     <span class="admin_name">Hamza</span>
    //     <i class='bx bx-chevron-down' ></i>
    //   </div>
    // </nav>
    // </section>

    //   </body>


    // </div>


 {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CV  name='Dr. Hamza Azam' img= <img src="https://bmc.edu.pk/wp-content/uploads/2019/03/doctor-red-1.png" />/> 
        <Greet  name='Hammad' secondName='Madiya'/>
        <Greet  name='Irfan' secondName='Phanuss'> This is children props </Greet>  }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}