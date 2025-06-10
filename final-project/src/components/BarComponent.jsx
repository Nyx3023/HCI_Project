import React, { useState } from 'react';
import { Navbar, Nav, Button, Collapse, Col, NavbarToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMap, FaCommentDots, FaCalendarAlt, FaCog, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuNotepadText } from "react-icons/lu";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar
        className="flex-column vh-100 p-3 sidebar d-none d-md-flex"
        style={{ width: '120px'}}
      >
        <Navbar.Brand
          className="text-center mb-4"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <img
            src="src/assets/cvsu.png"
            alt="Logo"
            className="img-fluid rounded-circle"
          />
        </Navbar.Brand>
        <div className="mt-auto text-center">
          <Nav className="flex-column text-center">
            <Link to="/map" className="mb-3 text-white active">
              <FaMap size={47} />
            </Link>
            <Link to="/message" className="mb-3 text-white">
              <FaCommentDots size={46} />
            </Link>
            <Link to="/sched" href="#calendar" className="mb-3 text-white">
              <FaCalendarAlt size={49} />
            </Link>
            <Link to="/Notes" className="mb-3 text-white">
              <LuNotepadText size={57} />
            </Link>
          </Nav>
        </div>
        <div className="mt-auto text-center">
          <Link
            to="/Settings"
            className="mb-3 text-white"
            style={{ flexDirection: 'column', marginRight: 'auto', display: 'block' }}
          >
            <FaCog size={30} />
          </Link>

        </div>
      </Navbar>
      <Navbar expand="md" className="d-md-none  px-3 sidebar">
        <Navbar.Brand>
          <img src="src/assets/cvsu.png" alt="Logo" className="img-fluid rounded-circle" style={{ width: '75px' }} />
        </Navbar.Brand>
        
        <Link to="/map" className=" text-white d-block">
            <FaMap size={37} />
          </Link>
          <Link to="/message" className="text-white d-block">
            <FaCommentDots size={37} />
          </Link>
          <Link to="/sched"className="text-white d-block ">
            <FaCalendarAlt size={37} />
          </Link>
          <Link to="/Notes" className="text-white d-block">
            <LuNotepadText size={37} />
          </Link>
          <Link to="/Settings" className="text-white d-block">
            <FaCog size={34} />
          </Link>
          
      </Navbar>


    </div>
  );
}

export default Sidebar;
