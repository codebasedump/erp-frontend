import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import {
  FaBell, FaClipboardCheck, FaEnvelope,  FaTh, FaUserCircle, FaBars, FaTimes, FaSearch,FaUserPlus,
FaBoxOpen,FaArrowUp,FaReact,FaVuejs,FaUser,FaCog,FaSignOutAlt
} from 'react-icons/fa';

function Header({ collapsed, setCollapsed }) {
  return (
    <div className="navbar header d-flex align-items-center justify-content-between px-4 py-2 bg-white shadow-sm">
      {/* Left: Sidebar Toggle */}
      <div
        className="toggle-icon"
        onClick={() => setCollapsed(!collapsed)}
        style={{ cursor: 'pointer', fontSize: '1.4rem' }}
      >
        {collapsed ? <FaBars /> : <FaTimes />}

      </div>
      <div className="search-wrapper d-flex align-items-center position-relative">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="form-control ps-5"
          placeholder="Search modules, users, experts..."
        />
      </div>


      {/* Right: Action Icons */}
      <Nav className="headernav ms-auto d-flex align-items-center gap-5">
        
        {/* Notifications */}
        <Dropdown align="end">
          <Dropdown.Toggle as="div" className="icon-wrapper">
            <FaBell />
            
          </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Header>Notifications</Dropdown.Header>
            <Dropdown.Item>
              <FaUserPlus className="me-2 text-primary" />
              New user registered
            </Dropdown.Item>
            <Dropdown.Item>
              <FaBoxOpen className="me-2 text-warning" />
              Inventory alert
            </Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>

        {/* Tasks */}
        <Dropdown align="end">
          <Dropdown.Toggle as="div" className="icon-wrapper">
            <FaClipboardCheck />
            
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Tasks</Dropdown.Header>
            <Dropdown.Item>
              <FaArrowUp className="me-2 text-danger" />
              Upgrade NPM – 0%
            </Dropdown.Item>
            <Dropdown.Item>
              <FaReact className="me-2 text-info" />
              ReactJS Version – 25%
            </Dropdown.Item>
            <Dropdown.Item>
              <FaVuejs className="me-2 text-success" />
              VueJS Version – 50%
            </Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>

        {/* Messages */}
        <Dropdown align="end">
          <Dropdown.Toggle as="div" className="icon-wrapper">
            <FaEnvelope />
            
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Messages</Dropdown.Header>
            <Dropdown.Item>New message from HR</Dropdown.Item>
            <Dropdown.Item>Client inquiry received</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

       

        {/* Profile */}
        <Dropdown align="end">
          <Dropdown.Toggle as="div" className="icon-wrapper profile-wrapper">
            <FaUserCircle />
          
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <FaUser className="me-2 text-secondary" />
              Profile
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCog className="me-2 text-secondary" />
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <FaSignOutAlt className="me-2 text-danger" />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* App Launcher */}
        <FaTh className="header-icon" />
      </Nav>
    </div>
  );
}

export default Header;