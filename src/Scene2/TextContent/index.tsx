import './style.css';

import {useMemo} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

import {TextContent} from '@/Assets/Scene2';
import {ExtraPolateOptions} from '@/constants';

const TextContentComp = ({durationInFrames}: {durationInFrames: number}): JSX.Element => {
	const frame = useCurrentFrame();
	const height = interpolate(frame, [0, 30], [15, 55], {
		...ExtraPolateOptions,
		easing: Easing.bezier(0.11, 0.36, 0.48, 0.94),
	});
	const divHeight = interpolate(frame, [30, 35], [0, 30], {
		...ExtraPolateOptions,
		easing: Easing.bezier(0.11, 0.36, 0.48, 0.94),
	});

	const opacity = interpolate(frame, [durationInFrames - 45, durationInFrames - 15], [0, 1]);

	const translateY = interpolate(frame, [0, 35], [720, 0], {
		...ExtraPolateOptions,
		easing: Easing.ease,
	});

	const words = useMemo(() => {
		return TextContent.split(' ');
	}, []);

	const wordOpacity = (index: number) => {
		const idleOpacity = 0.15;
		const totalWords = words.length;
		if (totalWords === 0) {
			return idleOpacity;
		}
		const currentFrame = frame;

		const delay = 40;
		if (currentFrame < delay) {
			return idleOpacity;
		}
		const textDuration = durationInFrames - delay;
		const showAt = (textDuration * index) / totalWords;
		if (currentFrame >= delay + showAt) {
			return 1;
		}
		return idleOpacity;
	};

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
						{words.map((word, index) => {
							return (
								<span
									key={index}
									style={{
										display: 'inline-block',
										opacity: wordOpacity(index),
										marginRight: '1rem',
										fontSize: '60px',
									}}
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
export default TextContentComp;
