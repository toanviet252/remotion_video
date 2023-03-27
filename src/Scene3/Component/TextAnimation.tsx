import {ExtraPolateOptions} from '@/constants';
import {useMemo} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

const TextAnimation: React.FC<{
	text: string;
	startFrame: number;
	endFrame: number;
	translateYArray: [from: number, to: number];
	fontSize?: string;
}> = ({text, startFrame, endFrame, translateYArray, fontSize}) => {
	const frame = useCurrentFrame();

	const translateY = (index: number) => {
		return interpolate(frame - index * 10, [startFrame, endFrame], translateYArray, {
			...ExtraPolateOptions,
			easing: Easing.bezier(0.07, 0.24, 0.04, 1),
		});
	};

	const opacity = (index: number) => {
		return interpolate(frame - index * 10, [startFrame, endFrame], [0, 1], {
			...ExtraPolateOptions,
		});
	};

	const texts = useMemo(() => text.split(' '), [text]);

	return (
		<>
			{texts.map((t, index) => {
				return (
					<span
						key={index}
						style={{
							transform: `translateY(${translateY(index)}px)`,
							display: 'inline-block',
							background: 'transparent',
							opacity: opacity(index),
							padding: '0 10px 0 0 ',
							color: 'white',
							fontSize: `${fontSize ?? '2rem'}`,
							fontWeight: '700',
						}}
					>
						{t}
					</span>
				);
			})}
		</>
	);
};
export default TextAnimation;
