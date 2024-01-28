import React, { useRef, useEffect } from 'react';
import "../styles/index.css";

import { Chart as ChartJS, registerables } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import ReactApexChart from 'react-apexcharts';
// Correct way to register all of the chart.js components
ChartJS.register(...registerables);

function ProjectionGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    });

    // Cleanup function to destroy the chart
    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} id="acquisitions"></canvas>;
}

export default ProjectionGraph;
