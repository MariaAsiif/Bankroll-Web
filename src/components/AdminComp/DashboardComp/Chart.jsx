import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    // maintainAspectRatio: false ,
    tooltips: {
        enabled: false
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
    },
    plugins: {
        legend: {
            display: false,
            position: 'top'
        },

    },
};


const labels = ['DEC2', 'DEC3', 'DEC4', 'DEC5', 'DEC6', 'DEC7', 'DEC8'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: [20, 30 , 40 , 22, 44, 55, 33, 22],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const  DashboardChart = () => {
    return <Line options={options} className='!w-full !h-full' data={data} />;
}
export default DashboardChart