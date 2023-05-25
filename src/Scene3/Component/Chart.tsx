import {Easing} from 'remotion';
import {dataChart1, dataChart2} from '@/Assets/Charts';
import {addExtraDataPoint} from '@/Utils/addExrtaPointData';
import {
	CategoryScale,
	Chart as ChartJS,
	ChartData,
	ChartOptions,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import {useMemo} from 'react';
import {Line} from 'react-chartjs-2';
import {interpolate, useCurrentFrame} from 'remotion';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({durationInFrames}: {durationInFrames: number}): JSX.Element => {
	const frame = useCurrentFrame();

	const options = useMemo(
		(): ChartOptions<'line'> => ({
			animation: false,
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
		}),
		[]
	);

	const newDataChart1 = useMemo(() => addExtraDataPoint(dataChart1, 1), []);
	const newDataChart2 = useMemo(() => addExtraDataPoint(dataChart2, 1), []);

	const firstDataPoint = useMemo(() => {
		return interpolate(frame, [20, Math.floor(durationInFrames / 2)], [0, newDataChart1.length], {
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
			easing: Easing.inOut(Easing.cubic),
		});
	}, [durationInFrames, frame, newDataChart1.length]);

	// Console.log('firstDataPoint', firstDataPoint, 'frame', frame, 'dataLength', newDataChart1.length);
	const secondDataPoint = useMemo(() => {
		return interpolate(frame, [Math.floor((durationInFrames - 20) / 2), durationInFrames], [0, newDataChart2.length], {
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
			easing: Easing.inOut(Easing.cubic),
		});
	}, [durationInFrames, frame, newDataChart2.length]);

	const data: ChartData<'line'> = useMemo(() => {
		return {
			labels: new Array(newDataChart1.length).fill(''),
			datasets: [
				{
					data: newDataChart1,
					borderColor: 'blue',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					yAxisID: 'y',
					borderWidth: 8,
					pointRadius: 0,
					showLine: false,
				},
				{
					data: newDataChart2,
					borderColor: 'white',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
					yAxisID: 'y1',
					borderWidth: 8,
					pointRadius: 0,
					showLine: false,
				},
				{
					data: newDataChart2.slice(0, secondDataPoint),
					borderColor: 'white',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
					yAxisID: 'y1',
					borderWidth: 8,
					pointRadius: 0,
				},
				{
					data: newDataChart1.slice(0, firstDataPoint),
					borderColor: 'blue',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					yAxisID: 'y',
					borderWidth: 8,
					pointRadius: 0,
				},
			],
		};
	}, [firstDataPoint, secondDataPoint, newDataChart1, newDataChart2]);

	return <Line options={options} data={data} />;
};
export default Chart;
