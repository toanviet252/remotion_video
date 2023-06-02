import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {EventDate, EventTime} from '@/Assets/Scene1';
import Text from '../../Components/Text';
import Logo from '../Component/Logo';
import {initLocale} from '@/Video';
import {useMemo} from 'react';

const SubContent: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [35, 45], [0.5, 1]);
	// Cubic-bezier(.15,.27,.45,.79)
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
	const text = useMemo(() => {
		return EventDate(initLocale);
	}, []);
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
					<Text text={text} startFrame={36} endFrame={46} />
				</span>
				<span
					style={{
						opacity: timeOpacity,
						transform: `translateY(${translateY}px)`,
					}}
				>
					{EventTime}
				</span>
			</div>

			<Logo />
		</div>
	);
};

export default SubContent;
