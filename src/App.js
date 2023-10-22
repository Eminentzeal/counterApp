// import './App.css';

import React from 'react';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './Counter';
import ErrorBoundaryPage from './ErrorBoundaryPage';

const NotFound = () => <h2>404 - Not Found</h2>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/error-boundary">Error Boundary Test</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/error-boundary" element={<ErrorBoundaryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
