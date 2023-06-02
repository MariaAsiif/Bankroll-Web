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


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: [2, 4, 5, 6, 7, 9, 12,15, 20,22,23,25],
            borderColor: '#DDC369',
            backgroundColor: 'rgba(254, 241, 229, 0.5)',
        },
        {
            fill: true,
            label: 'Dataset 2',
            data: [20, 30 , 40 , 22, 44, 55, 33, 22,10 ,11, 12,13],
            borderColor: '#896CDD ',
            backgroundColor: 'rgba(137, 108, 221, 0.5)',
        },
    ],
};

const  CardCenterChart = () => {
    return <Line options={options} className='!w-full !h-full' data={data} />;
}
export default CardCenterChart