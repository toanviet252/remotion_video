import {ExtrapolateType, InterpolateOptions} from 'remotion';
const extrapolate: ExtrapolateType = 'clamp';
export const ExtraPolateOptions: InterpolateOptions = {
	extrapolateLeft: extrapolate,
	extrapolateRight: extrapolate,
};
