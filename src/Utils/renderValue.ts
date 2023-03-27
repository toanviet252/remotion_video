import {interpolate} from 'remotion';
import {ExtraPolateOptions} from '../constants';

// Cycling change opacity
export const renderOpacityAndTransitionValue = (
	frame: number,
	cycleDurationOpacity: number,
	cycleDurationTransition: number
) => {
	const haftCycle = cycleDurationOpacity / 2;
	const cycleFrame = frame % cycleDurationOpacity;
	const opacity = interpolate(cycleFrame, [0, haftCycle, cycleDurationOpacity], [0.25, 1, 0.5], {
		...ExtraPolateOptions,
	});

	const cycleTransitionFrame = (frame + 10) % cycleDurationTransition;
	const haftCycleTransition = cycleDurationTransition / 2;

	const translationY = interpolate(
		cycleTransitionFrame,
		[0, haftCycleTransition, cycleDurationTransition],
		[0, 60, 0],
		{
			...ExtraPolateOptions,
		}
	);
	return {
		opacity,
		translationY,
	};
};
