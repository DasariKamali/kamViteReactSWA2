import React, { useEffect, useState } from 'react';
import { getPublicData, postApp2Data } from './api';

function App() {
  const [publicData, setPublicData] = useState('');
  const [app2Data, setApp2Data] = useState('');

  useEffect(() => {
    getPublicData().then(data => setPublicData(data));
  }, []);

  const handlePostRequest = async () => {
    const requestData = { message: "Hello from React App 2!" }; // Example data
    try {
      const data = await postApp2Data(requestData);
      setApp2Data(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Vite React App 2</h1>
      <p>Public Data: {publicData}</p>
      <button onClick={handlePostRequest}>Send POST request to /api/app2</button>
      <p>App 2 Data: {app2Data}</p>
    </div>
  );
}

export default App;
