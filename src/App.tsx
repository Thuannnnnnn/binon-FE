import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

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
    <>
      <h1>test 3</h1>
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
        <h2>User Data</h2>
        <p>{userData}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
