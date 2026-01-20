import React from "react";
import { Nav } from "react-bootstrap";

function Sidebar() {
  return (
    <div xs={12} style={{ width: "200px", background: "#531dac", height: "100vh" }} className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column p-3">
        <Nav.Link href="/home" className="text-white">Home</Nav.Link>
        <Nav.Link href="/reports" className="text-white">Reports</Nav.Link>
        <Nav.Link href="/settings" className="text-white">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
