import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {ChartOptions, ChartData} from 'chart.js';
import {easingEffects} from 'chart.js/helpers';
import {dataChart1, dataChart2} from '../../constants';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Animation:
let easing = easingEffects.easeInOutSine;
const totalDuration = 3500;
const duration = (ctx: any) => (easing(ctx.index / dataChart1.length) * totalDuration) / dataChart1.length;

const delay = (ctx: any) => easing(ctx.index / dataChart1.length) * totalDuration;
const previousY = (ctx: any) =>
	ctx.index === 0
		? ctx.chart.scales.y.getPixelForValue(100)
		: ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

// Option block
const options: ChartOptions<'line'> = {
	animations: {
		x: {
			type: 'number',
			easing: 'easeInOutSine',
			duration: duration,
			from: NaN, // the point is initially skipped
			delay(ctx: any) {
				if (ctx.type !== 'data' || ctx.xStarted) {
					return 0;
				}
				ctx.xStarted = true;

				return delay(ctx);
			},
		},
		y: {
			type: 'number',
			easing: 'easeInOutSine',
			duration: duration,
			from: previousY,
			delay(ctx: any) {
				if (ctx.type !== 'data' || ctx.yStarted) {
					return 0;
				}
				ctx.yStarted = true;
				return delay(ctx);
			},
		},
	},

	responsive: true,
	interaction: {
		intersect: false,
	},

	plugins: {
		title: {
			display: false,
		},
		legend: {
			display: false,
		},
	},
	scales: {
		y: {
			type: 'linear' as const,
			display: true,
			position: 'left' as const,
			ticks: {
				font: {
					size: 30,
					weight: 'bold',
				},
				color: 'blue',
			},
			grid: {
				color: 'white',
				lineWidth: 2,
			},
		},
		y1: {
			type: 'linear' as const,
			display: true,
			position: 'right' as const,
			grid: {
				color: 'white',
				lineWidth: 2,
			},
			ticks: {
				font: {
					size: 30,
				},
				color: 'white',
			},
		},
	},
};

//Data block
const data: ChartData<'line'> = {
	labels: new Array(dataChart1.length).fill(''),
	datasets: [
		{
			data: dataChart1,
			borderColor: 'white',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			yAxisID: 'y',
			borderWidth: 10,
			pointRadius: 0,
		},
		{
			data: dataChart2,
			borderColor: 'blue',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
			yAxisID: 'y1',
			borderWidth: 10,
			pointRadius: 0,
		},
	],
};

const Chart: React.FC = () => {
	return <Line options={options} data={data} />;
};
export default Chart;
