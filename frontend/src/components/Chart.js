import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRefs = {
    intensity: useRef(),
    relevance: useRef(),
    likelihood: useRef(),
    end_year: useRef(),
    start_year: useRef(),
    topic: useRef(),
    sector: useRef(),
    insight: useRef(),
    url: useRef(),
    region: useRef(),
    impact: useRef(),
    added: useRef(),
    published: useRef(),
    country: useRef(),
    pestle: useRef(),
    source: useRef(),
    title: useRef(),
  };

  useEffect(() => {
    const charts = [];

    Object.keys(chartRefs).forEach(field => {
      const chartRef = chartRefs[field].current;
      const ctx = chartRef.getContext('2d');

      const labels = data.map(item => item.title.split(' ')[0]); // Assuming first word of title as labels
      const values = data.map(item => item[field]);

      if (chartRef.chart) {
        chartRef.chart.destroy();
      }

      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: field,
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
            borderColor: 'rgba(54, 162, 235, 1)', // Blue color
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

      chartRef.chart = newChart;
      charts.push(newChart);
    });

    return () => {
      charts.forEach(chart => chart.destroy());
    };
  }, [data]);

  return (
    <div className="chart-container">
      {Object.keys(chartRefs).map(field => (
        <canvas key={field} ref={chartRefs[field]} className="chart" />
      ))}
    </div>
  );
};

export default ChartComponent;
