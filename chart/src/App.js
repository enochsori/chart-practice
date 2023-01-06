import styled from 'styled-components';
import type { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import ChartLabels from 'chartjs-plugin-labels';
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';
import React, { MouseEvent, useRef } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartLabels
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
    labels: {
      render: 'label',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: { color: '#ffffff' },
    },
    y: {
      stacked: true,
      grid: { color: '#ffffff' },
    },
  },
};

const labels = [
  'bet east - 01',
  'bet east - 02',
  'bet east - 03,',
  'bet east - 04',
  'bet east - 05',
  'bet east - 06',
  'bet east - 07',
  'bet east - 08',
  'bet east - 09',
  'bet east - 10',
];

export const backgroundColor = ['#70C7F0', '#83FFFF'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Jan',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[0],
    },
    {
      label: 'Feb',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[1],
    },
    {
      label: 'Mar',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[0],
    },
    {
      label: 'Apr',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[1],
    },
    {
      label: 'May',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[0],
    },
    {
      label: 'Jun',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[1],
    },
    {
      label: 'Jul',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[0],
    },
    {
      label: 'Aug',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[1],
    },
    {
      label: 'Sep',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[0],
    },
    {
      label: 'Oct',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[1],
    },
    {
      label: 'Dec',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[0],
    },
    {
      label: 'Nov',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: backgroundColor[1],
    },
  ],
};

function App() {
  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const chartRef = useRef(null);

  const handleOnClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;
    // console.log(chart);
    if (!chart) {
      return;
    }
    printDatasetAtEvent(getDatasetAtEvent(chart, event));
  };

  return (
    <Wrapper>
      <Bar
        ref={chartRef}
        options={options}
        data={data}
        onClick={handleOnClick}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #233a54;
`;
