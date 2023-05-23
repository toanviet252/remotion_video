import './style.css';

import {useMemo} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

import {TextContent} from '@/Assets/Scene2';
import {ExtraPolateOptions} from '@/constants';

const TextContentComp = (): JSX.Element => {
	const frame = useCurrentFrame();
	const height = interpolate(frame, [0, 30], [15, 55], {
		...ExtraPolateOptions,
		easing: Easing.bezier(0.11, 0.36, 0.48, 0.94),
	});
	const divHeight = interpolate(frame, [30, 35], [0, 30], {
		...ExtraPolateOptions,
		easing: Easing.bezier(0.11, 0.36, 0.48, 0.94),
	});

	const opacity = interpolate(frame, [260, 290], [0, 1], ExtraPolateOptions);

	const translateY = interpolate(frame, [0, 35], [720, 0], {
		...ExtraPolateOptions,
		easing: Easing.ease,
	});
	const words = useMemo(() => {
		return TextContent.split(' ');
	}, []);

	const wordOpacity = (index: number) => {
		const wordStartFrame = 40; // Frame at which the words start fading in
		const fadeDuration = 15; // Duration of fading in for each word
		const fadeDelay = 10; // Delay between fading in of consecutive words
		const currentFrame = frame - wordStartFrame;
		const wordDelay = index * fadeDelay;

		if (currentFrame >= wordDelay && currentFrame < wordDelay + fadeDuration) {
			// Const opacityProgress = (currentFrame - wordDelay) / fadeDuration;

			// return interpolate(opacityProgress, [0, 1], [0.15, 1], ExtraPolateOptions);
			return interpolate(currentFrame - wordDelay, [0, fadeDuration], [0.15, 1], ExtraPolateOptions);
		}
		// Opacity remains at 1 after reaching it
		return currentFrame >= wordDelay ? 1 : 0.15;
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
										fontWeight: '600',
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
