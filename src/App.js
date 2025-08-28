import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="d-flex">
        <Sidebar collapsed={collapsed}/>

        <div className={`main-wrapper flex-grow-1 d-flex flex-column min-vh-100 ${collapsed ? 'expanded' : ''}`}>
          <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
          <main className="container-fluid flex-grow-1 mt-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;