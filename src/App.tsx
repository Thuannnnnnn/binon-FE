import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Test from './pages/test'; // Import the Test component

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<string>('https://shopcuathuan.shop/api/hello');
        setUserData(response.data);
      } catch (error) {
        const err = error as AxiosError; // Casting error to AxiosError type
        console.error('Error fetching user data:', err.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Router>
      <div>
        <h1>{userData}</h1>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <nav>
          <Link to="/">Home</Link> | <Link to="/test">Test</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
