import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {FaTachometerAlt, FaUsers, FaBoxOpen, FaFileInvoiceDollar,
  FaHandshake, FaCog, FaChartLine, FaBell, FaClipboardList
} from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar({ collapsed }) {

  return (
    <div className={`sidebar text-white p-3 pt-4 ${collapsed ? 'collapsed' : ''}`}>
      {/* <div className="d-flex justify-content-between align-items-center mb-4">
        {!collapsed && <h4 className="text-info">Hoffstee ERP</h4>}
        <FaBars className="toggle-icon" onClick={() => setCollapsed(!collapsed)} />
      </div> */}

      {!collapsed && (
        <div className="sidebar-brand d-flex align-items-center px-3 mb-4">
          
          <span className="fw-bold fs-5">HOFFSTEE</span>
        </div>
      )}

      <Nav className="flex-column gap-2">
        
        <Nav.Link as={Link} to="/" className="text-white d-flex align-items-center">
          <FaTachometerAlt className="sidebar-icon me-2" /> {!collapsed && 'Dashboard'}
        </Nav.Link>
        <Nav.Link as={Link} to="/employees" className="text-white d-flex align-items-center">
          <FaUsers className="sidebar-icon me-2" /> {!collapsed && 'Employees'}
        </Nav.Link>
        <Nav.Link as={Link} to="/inventory" className="text-white d-flex align-items-center">
          <FaBoxOpen className="sidebar-icon me-2" /> {!collapsed && 'Inventory'}
        </Nav.Link>
        <Nav.Link as={Link} to="/finance" className="text-white d-flex align-items-center">
          <FaFileInvoiceDollar className="sidebar-icon me-2" /> {!collapsed && 'Finance'}
        </Nav.Link>
        <Nav.Link as={Link} to="/crm" className="text-white d-flex align-items-center">
          <FaHandshake className="sidebar-icon me-2" /> {!collapsed && 'CRM'}
        </Nav.Link>
        <Nav.Link as={Link} to="/reports" className="text-white d-flex align-items-center">
          <FaChartLine className="sidebar-icon me-2" /> {!collapsed && 'Reports'}
        </Nav.Link>
        <Nav.Link as={Link} to="/notifications" className="text-white d-flex align-items-center">
          <FaBell className="sidebar-icon me-2" /> {!collapsed && 'Notifications'}
        </Nav.Link>
        <Nav.Link as={Link} to="/logs" className="text-white d-flex align-items-center">
          <FaClipboardList className="sidebar-icon me-2" /> {!collapsed && 'Logs'}
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" className="text-white d-flex align-items-center mt-3">
          <FaCog className="sidebar-icon me-2" /> {!collapsed && 'Settings'}
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;