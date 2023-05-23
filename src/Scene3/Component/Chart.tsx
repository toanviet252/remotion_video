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

	const newDataChart1 = useMemo(() => addExtraDataPoint(dataChart1, 1), []);
	const newDataChart2 = useMemo(() => addExtraDataPoint(dataChart2, 1), []);

	const firstDataPoint = useMemo(() => {
		return Math.ceil(((newDataChart1.length * frame) / durationInFrames) * 3);
	}, [durationInFrames, frame, newDataChart1.length]);

	// Console.log('firstDataPoint', firstDataPoint, 'frame', frame, 'dataLength', newDataChart1.length);
	const secondDataPoint = useMemo(() => {
		if (firstDataPoint > 157) {
			return Math.ceil(((newDataChart2.length * frame) / durationInFrames) * 3 - 157);
		}
		return 0;
	}, [durationInFrames, firstDataPoint, frame, newDataChart2.length]);
	// Console.log('secondDataPoint', secondDataPoint);
	const data: ChartData<'line'> = useMemo(() => {
		return {
			labels: new Array(newDataChart1.length).fill(''),
			datasets: [
				{
					data: newDataChart1,
					borderColor: 'blue',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					yAxisID: 'y',
					borderWidth: 10,
					pointRadius: 0,
					showLine: false,
				},
				{
					data: newDataChart2,
					borderColor: 'white',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
					yAxisID: 'y1',
					borderWidth: 10,
					pointRadius: 0,
					showLine: false,
				},
				{
					data: newDataChart1.slice(0, firstDataPoint),
					borderColor: 'blue',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					yAxisID: 'y',
					borderWidth: 10,
					pointRadius: 0,
				},
				{
					data: newDataChart2.slice(0, secondDataPoint),
					borderColor: 'white',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
					yAxisID: 'y1',
					borderWidth: 10,
					pointRadius: 0,
				},
			],
		};
	}, [firstDataPoint, secondDataPoint, newDataChart1, newDataChart2]);

	return <Line options={options} data={data} />;
};
export default Chart;
