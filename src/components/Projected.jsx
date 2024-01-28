import React, { useState, useRef, useEffect } from "react";
import "../styles/index.css";

import { Chart as ChartJS, registerables } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import ReactApexChart from "react-apexcharts";
import { supabase } from "./supabaseClient";
// Correct way to register all of the chart.js components
ChartJS.register(...registerables);

function ProjectionGraph() {
  // Define the initial state for series and options

  const [series, setSeries] = useState([
    {
      name: "XYZ MOTORS",
      data: [], // Make sure 'dates' is defined or passed as props
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase
        .from("Modules")
        .select("change_in_money, date_completed")
        .eq("section", 0)
        .order("date_completed", { ascending: true });

      if (error) console.log("Error:", error);
      if (data) {
        console.log(data);
        const transformedData = data.map((item) => ({
          x: new Date(item.date_completed).getTime(),
          y: item.change_in_money,
        }));
        // console.log(transformedData);
        setSeries([{ ...series[0], data: transformedData }]);
      }
    }

    fetchData();
  }, []);

  const [options, setOptions] = useState({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Current Finances",
      align: "center",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        // formatter: function (val) {
        //   return (val / 1000000).toFixed(0);
        // },
      },
      title: {
        text: "Dollars",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ProjectionGraph;
