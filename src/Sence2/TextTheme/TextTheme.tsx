import {Easing, interpolate, useCurrentFrame} from 'remotion';
import './theme.css';
import {ExtraPolateOptions} from '../../constants';

const TextTheme: React.FC = () => {
	const frame = useCurrentFrame();
	const height = interpolate(frame, [0, 30], [15, 55], {
		...ExtraPolateOptions,
		easing: Easing.bezier(0.11, 0.36, 0.48, 0.94),
	});
	const divHeight = interpolate(frame, [30, 35], [0, 30], {
		...ExtraPolateOptions,
		easing: Easing.bezier(0.11, 0.36, 0.48, 0.94),
	});
	const opacity = interpolate(frame, [260, 290], [0, 1]);
	const wordOpacity = (index: number) => {
		// return interpolate(frame - index * 7, [30, 60], [0.5, 1]);
		const initialOpacity = 0.15;
		const opacityIncrement = 0.1;
		const delay = 10;
		let opacity = initialOpacity;

		if (index === 0 || wordOpacity(index - 1) >= 1) {
			const waitTime = index * delay;
			const progress = (frame - waitTime) / delay;
			opacity = Math.min(initialOpacity + progress * opacityIncrement, 1);
		}

		return opacity;
	};
	const translateY = interpolate(frame, [0, 35], [720, 0], {
		...ExtraPolateOptions,
		easing: Easing.ease,
	});
	const words = `Amazon launches live-streaming video feature in India to drive sales. Tied up with social media influences to host live-streams, interact with customers, and offer limited period deals. Popular in China, Youtube also expanded live-stream shopping`;
	return (
		<>
			<div
				style={{
					height: `${divHeight}px`,
					width: '25%',
					backgroundColor: 'cyan',
					position: 'absolute',
					bottom: '55%',
					left: '0',
				}}
			/>
			<div
				style={{
					position: 'relative',
					height: '100%',
					width: '100%',
				}}
			>
				<div
					className="text-theme-container"
					style={{
						height: `${height}%`,
					}}
				>
					<div
						style={{
							height: `${divHeight}px`,
							width: '25%',
							backgroundColor: 'black',
							position: 'absolute',
							top: '0',
							right: '0',
						}}
					/>
					<span
						style={{
							marginBottom: '6rem',
							display: 'inline-block',
							transform: `translateY(${translateY}px)`,
						}}
					>
						{words.split(' ').map((word, index) => {
							return (
								<span
									style={{
										display: 'inline-block',
										opacity: wordOpacity(index),
										marginRight: '1rem',
										fontSize: '60px',
									}}
									key={index}
								>
									{word}
								</span>
							);
						})}
					</span>
					<span
						className="author"
						style={{
							opacity,
						}}
					>
						RTRS
					</span>
				</div>
			</div>
		</>
	);
};
export default TextTheme;
