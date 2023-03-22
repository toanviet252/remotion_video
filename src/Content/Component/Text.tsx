import {Easing, interpolate, useCurrentFrame} from 'remotion';

const Text: React.FC<{
	text: string;
	startFrame: number;
	endFrame: number;
}> = ({text, startFrame, endFrame}) => {
	const frame = useCurrentFrame();
	const translateY = interpolate(frame, [startFrame, endFrame], [50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.07, 0.24, 0.04, 1),
	});
	const opacity = interpolate(frame, [startFrame, endFrame], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<span
			style={{
				transform: `translateY(${translateY}px)`,
				display: 'inline-block',
				background: 'transparent',
				opacity,
				padding: '0 1rem 0 0 ',
			}}
		>
			{text}
		</span>
	);
};
export default Text;
