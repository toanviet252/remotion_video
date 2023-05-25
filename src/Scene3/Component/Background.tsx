import {ExtraPolateOptions} from '@/constants';
import {interpolate, useCurrentFrame} from 'remotion';

const shape = [
	{
		id: 1,
		height: 45,
		width: 500,
		backgroundColor: 'blue',
		top: 15,
		left: 12,
		opacity: 1,
	},
	{
		id: 2,
		height: 45,
		width: 200,
		backgroundColor: 'white',
		top: 35,
		left: 10,
		opacity: 0.5,
	},
	{
		id: 3,
		height: 45,
		width: 300,
		backgroundColor: 'yellow',
		top: 18,
		left: 65,
		opacity: 0.5,
	},
	{
		id: 4,
		height: 45,
		width: 250,
		backgroundColor: 'white',
		top: 60,
		left: 30,
		opacity: 0.25,
	},
	{
		id: 5,
		height: 45,
		width: 500,
		backgroundColor: 'blue',
		top: 85,
		left: 65,
		opacity: 1,
	},
	{
		id: 6,
		height: 45,
		width: 250,
		backgroundColor: 'white',
		top: 85,
		left: 90,
		opacity: 0.5,
	},
];

const BackGround = () => {
	const frame = useCurrentFrame();
	const translation = interpolate(frame, [0, 360], [-280, 180], {...ExtraPolateOptions});
	return (
		<>
			<div
				style={{
					height: '35px',
					width: '200px',
					backgroundColor: 'yellow',
					position: 'absolute',
					top: '3%',
					left: '20%',
					rotate: '-45deg',
					transform: `translateX(${translation}px)`,
					borderRadius: '10px',
				}}
			/>
			{shape.map((item) => {
				return (
					<div
						key={item.id}
						style={{
							height: `${item.height}px`,
							width: `${item.width}px`,
							backgroundColor: `${item.backgroundColor}`,
							position: 'absolute',
							top: `${item.top}%`,
							left: `${item.left}%`,
							rotate: '-45deg',
							transform: `translateX(${-translation}px)`,
							borderRadius: '10px',
							opacity: `${item.opacity}`,
						}}
					/>
				);
			})}
		</>
	);
};
export default BackGround;
