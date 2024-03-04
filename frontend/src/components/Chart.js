// Chart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRefs = useRef({});
  const charts = useRef([]);

  useEffect(() => {
    const createChart = (field, ctx) => {
      const labels = data.map(item => item.title.split(' ')[0]); // Assuming first word of title as labels
      const values = data.map(item => item[field]);

      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: field,
            data: values,
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color
            borderColor: 'rgba(255, 99, 132, 1)', // Red color
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          animation: {
            duration: 1000, // 1 second animation
            easing: 'easeInOutQuad' // Smooth animation
          }
        }
      });

      charts.current.push(newChart);
    };

    if (data && data.length > 0) {
      Object.keys(data[0]).forEach(field => {
        const canvasRef = chartRefs.current[field];
        if (canvasRef) {
          const ctx = canvasRef.getContext('2d');
          if (ctx) {
            createChart(field, ctx);
          }
        }
      });
    }

    return () => {
      charts.current.forEach(chart => chart.destroy());
    };
  }, [data]);

  return (
    <div className="chart-container">
      {data && data.length > 0 && Object.keys(data[0]).map((field, index) => (
        <canvas key={index} ref={el => chartRefs.current[field] = el} className="chart" />
      ))}
    </div>
  );
};

export default ChartComponent;
