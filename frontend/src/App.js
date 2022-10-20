import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import {BuyerSidebar} from './Components/BuyerSideBar' ; 
//import {Greet} from './Components/Greet';
//import {Message} from './Components/Message';
// import {Bio} from './Components/Bio' ; 
// import {CV} from './Components/Bio' ; 
// import {Information} from './Components/Bio' ; clear
// import {Experience} from './Components/Bio';
// import {Skill} from './Components/Bio';
// import {Hobbies} from './Components/Bio';

function App() {
  return (

    
    <div className="App">
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
      <body>
         <BuyerSidebar/>
         <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
        
      </div>

      <div>
      <a href="/#" class="active">
                <i class='bx bx-grid-alt' ></i>
                <span class="links_name">about</span>
      </a>
      
      </div>



      


      {/* <div class="search-box">
        <input type="text" placeholder="Search..."></input>
        <i class='bx bx-search' ></i>
      </div>
      <div class="profile-details">
        <img src="images/profile.jpg" alt=""></img>
        <span class="admin_name">Prem Shahi</span>
        <i class='bx bx-chevron-down' ></i>
      </div> */}
    </nav>
    </section>

      </body>


    </div>
  );
}

export default App;
