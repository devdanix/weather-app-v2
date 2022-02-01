import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(...registerables, ChartDataLabels);

export function TempChart(
  tempData = []
) {

  const minTemp = () => {
    let min = ''
    tempData.tempData.forEach(item => {
      if(min === '' || item.temp < min) {
        min = item.temp
      }
    })
    return min
  }

  const maxTemp = () => {
    let max = ''
    tempData.tempData.forEach(item => {
      if(max === '' || item.temp > max) {
        max = item.temp
      }
    })
    return max
  }

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 0
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Temperature',
        align: 'start',
      },
      datalabels: {
        color: '#36A2EB',
        align: 'top',
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        position: "top",
        gridLines: {
          offsetGridLines: false,
        },
        grid: {
          drawBorder: false,
          lineWidth: 0,
          tickLength: 0,
          offset: true,
        },
      },
      y: {
        suggestedMin: Math.ceil(minTemp()) - 1,
        suggestedMax: Math.ceil(maxTemp()),
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  }

  const labels = tempData.tempData.length > 0 ? tempData.tempData.map(item => {return ''}): '';

  const data = {
    labels,
    datasets: [
      {
        radius: 5,
        tension: 0.4,
        fill: 'start',
        data: tempData.tempData.length > 0 ? tempData.tempData.map(item => {return Math.ceil(item.temp)}): '',
        borderColor: '#64b5f6',
        backgroundColor: '#bbdefb',
      }
    ],
  };

  return  <Line options={options} data={data}  />;

}
