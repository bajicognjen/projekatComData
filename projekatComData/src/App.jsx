import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Users from './Users.jsx';
import ToDo from './ToDo.jsx';
import Calculator from './Calculator.jsx';
import './index.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div>
        <nav className='menu'>
          <NavLink to="/users" className='menu-link' activeClassName='menu-link-active'>Users</NavLink>
          <NavLink to="/todos" className='menu-link' activeClassName='menu-link-active'>To-Do List</NavLink>
          <NavLink to="/calculator" className='menu-link' activeClassName='menu-link-active'>Calculator</NavLink>
        </nav>

        <Routes>
          <Route path="/users" element={<Users setLoading={setLoading} />} />
          <Route path="/todos" element={<ToDo setLoading={setLoading} />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<h2>Dobrodosli izaberite opciju koju zelite.</h2>} />
        </Routes>

        {loading && <div className="loader"></div>}
      </div>
    </Router>
  );
};

export default App;
