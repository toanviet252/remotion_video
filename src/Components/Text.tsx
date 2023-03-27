import {ExtraPolateOptions} from '@/constants';
import {useMemo} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

const Text: React.FC<{
	text: string;
	startFrame: number;
	endFrame: number;
}> = ({text, startFrame, endFrame}) => {
	const frame = useCurrentFrame();
	const translateY = (index: number) => {
		return interpolate(frame - index * 7, [startFrame, endFrame], [50, 0], {
			...ExtraPolateOptions,
			easing: Easing.bezier(0.07, 0.24, 0.04, 1),
		});
	};
	const opacity = (index: number) => {
		return interpolate(frame - index * 7, [startFrame, endFrame], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
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
							padding: '0 1rem 0 0 ',
						}}
					>
						{t}
					</span>
				);
			})}
		</>
	);
};
export default Text;
