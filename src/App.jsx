import { useState } from 'react'
import TopNavbar from "./component/navbar"; 
import Sidebar from "./component/sidebar"; 
import Dashboard from "./component/dashboard";

import './App.css'

function App() { 

  return (
    <>
    {/* Top Navbar */}
      <TopNavbar />

      {/* Sidebar + Dashboard below Navbar */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Dashboard />
        </div>
      </div>  
    </>
  )
}

export default App
