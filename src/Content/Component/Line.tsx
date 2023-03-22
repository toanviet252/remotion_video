import {useCurrentFrame, interpolate, Easing} from 'remotion';

const Line: React.FC<{
	content: string;
	startFrame: number;
	endFrame: number;
}> = ({content, startFrame, endFrame}) => {
	const frame = useCurrentFrame();
	const translateX = interpolate(frame, [startFrame, endFrame], [1080, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bezier(0.07, 0.24, 0.04, 1.01),
	});
	const textShadow = interpolate(frame, [startFrame + 5, endFrame + 5], [25, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.ease,
	});
	/*
  text-shadow: 7px 0px 0px rgba(16,0,197,0.85);
  */
	return (
		<div className="line-content">
			<span
				style={{
					transform: `translateX(${translateX}px)`,
					display: 'block',
					width: 'fit-content',
					textShadow: `${textShadow}px 0px 0px rgba(16,0,197,0.85)`,
				}}
			>
				{content}
			</span>
		</div>
	);
};
export default Line;
