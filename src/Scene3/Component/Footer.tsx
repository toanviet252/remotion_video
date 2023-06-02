import {EventDate, EventTime, FooterText} from '@/Assets/Scene3';
import Text from '@/Components/Text';
import {ExtraPolateOptions} from '@/constants';
import {formatDateLocale} from '@/Utils/formatTimeLocale';
import {initLocale} from '@/Video';
import {useMemo} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

const Footer: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = (delay: number) => {
		return interpolate(frame - delay, [35, 45], [0.5, 1]);
	};
	// Cubic-bezier(.15,.27,.45,.79)
	const paddingBottom = (delay: number) => {
		return interpolate(frame - delay, [52, 62], [50, 5], {
			easing: Easing.bezier(0.15, 0.27, 0.45, 0.79),
			...ExtraPolateOptions,
		});
	};
	const date = useMemo(() => {
		return formatDateLocale(new Date(EventDate), initLocale);
	}, []);
	const subText = useMemo(() => {
		return FooterText(initLocale);
	}, []);

	return (
		<div className="sub-content">
			<div className="sub-content left">
				<span
					style={{
						display: 'inline-block',
						opacity: opacity(0),
						paddingBottom: `${paddingBottom(0)}px`,
					}}
				>
					<Text text={date} startFrame={36} endFrame={46} />
				</span>
				<span
					style={{
						display: 'inline-block',
						opacity: opacity(27),
						paddingBottom: `${paddingBottom(27)}px`,
					}}
				>
					<Text text={`${subText} ${EventTime}`} startFrame={62} endFrame={72} />
				</span>
			</div>
		</div>
	);
};
export default Footer;
