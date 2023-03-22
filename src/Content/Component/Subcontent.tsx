import Text from '../Component/Text';
import Logo from '../Component/Logo';
import {useCurrentFrame, interpolate, Easing} from 'remotion';

const SubContent: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [35, 45], [0.5, 1]);
	// cubic-bezier(.15,.27,.45,.79)
	const paddingBottom = interpolate(frame, [52, 62], [50, 5], {
		easing: Easing.bezier(0.15, 0.27, 0.45, 0.79),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const timeOpacity = interpolate(frame, [62, 72], [0, 1]);
	const translateY = interpolate(frame, [74, 84], [30, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.ease,
	});
	return (
		<div className="sub-content">
			<div className="sub-content left">
				<span
					style={{
						display: 'inline-block',
						opacity,
						paddingBottom: `${paddingBottom}px`,
					}}
				>
					<Text text="21" startFrame={36} endFrame={46} />
					<Text text="Oct" startFrame={44} endFrame={54} />
					<Text text="2022" startFrame={52} endFrame={62} />
				</span>
				<span
					style={{
						opacity: timeOpacity,
						transform: `translateY(${translateY}px)`,
					}}
				>
					3:38:04
				</span>
			</div>

			<Logo />
		</div>
	);
};

export default SubContent;
