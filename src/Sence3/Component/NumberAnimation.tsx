import {interpolate, useCurrentFrame} from 'remotion';
import {ExtraPolateOptions} from '../../constants';

const NumberAnimation: React.FC<{
	startNumber: number;
	endNumber: number;
	frameRange: [number, number];
	backgroundColor: string;
	notation?: string;
	fontColor?: string;
}> = ({startNumber, endNumber, frameRange, backgroundColor, notation, fontColor}) => {
	const frame = useCurrentFrame();
	const value = interpolate(frame, frameRange, [startNumber, endNumber], {
		...ExtraPolateOptions,
	});
	const opacity = interpolate(frame, frameRange, [0, 1]);
	return (
		<span
			style={{
				opacity,
				color: `${fontColor ?? 'white'}`,
				fontSize: '2rem',
				backgroundColor,
				padding: '1rem',
				width: 'fit-content',
				fontWeight: '700',
			}}
		>
			{value.toFixed(2)}
			{notation ?? ''}
		</span>
	);
};
export default NumberAnimation;
