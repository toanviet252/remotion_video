import {useCurrentFrame, interpolate, Easing} from 'remotion';
import {ExtraPolateOptions} from '../../constants';
import Text from '../../Content/Component/Text';

const Footer: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = (delay: number) => {
		return interpolate(frame - delay, [35, 45], [0.5, 1]);
	};
	// cubic-bezier(.15,.27,.45,.79)
	const paddingBottom = (delay: number) => {
		return interpolate(frame - delay, [52, 62], [50, 5], {
			easing: Easing.bezier(0.15, 0.27, 0.45, 0.79),
			...ExtraPolateOptions,
		});
	};
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
					<Text text="30 Sep 2022" startFrame={36} endFrame={46} />
				</span>
				<span
					style={{
						display: 'inline-block',
						opacity: opacity(27),
						paddingBottom: `${paddingBottom(27)}px`,
					}}
				>
					<Text text="As of 10:49:16 AM" startFrame={62} endFrame={72} />
				</span>
			</div>
		</div>
	);
};
export default Footer;
