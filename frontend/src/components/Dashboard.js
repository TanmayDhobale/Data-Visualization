// Dashboard.js
import React, { useState, useEffect } from 'react';
import ChartComponent from './Chart';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/TanmayDhobale/json/master/jsondata.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>  
      <h1 style={{ textAlign: 'center' }}>Data Visualization  Dashboard</h1>
      <ChartComponent data={data} />
    </div>
  );
};

export default Dashboard;
