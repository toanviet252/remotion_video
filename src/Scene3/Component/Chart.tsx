import {dataChart1, dataChart2} from '@/Assets/Charts';
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
import {useCurrentFrame} from 'remotion';

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

	const firstDataPoint = useMemo(() => {
		return Math.ceil((dataChart1.length * frame) / durationInFrames);
	}, [durationInFrames, frame]);

	const data: ChartData<'line'> = useMemo(() => {
		return {
			labels: new Array(dataChart1.length).fill(''),
			datasets: [
				{
					data: dataChart1,
					borderColor: 'white',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					yAxisID: 'y',
					borderWidth: 10,
					pointRadius: 0,
					showLine: false,
				},
				{
					data: dataChart2,
					borderColor: 'blue',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
					yAxisID: 'y1',
					borderWidth: 10,
					pointRadius: 0,
					showLine: false,
				},
				{
					data: dataChart1.slice(0, firstDataPoint),
					borderColor: 'white',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					yAxisID: 'y',
					borderWidth: 10,
					pointRadius: 0,
				},
				{
					data: dataChart2.slice(0, firstDataPoint),
					borderColor: 'blue',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
					yAxisID: 'y1',
					borderWidth: 10,
					pointRadius: 0,
				},
			],
		};
	}, [firstDataPoint]);

	return <Line options={options} data={data} />;
};
export default Chart;
