import {AbsoluteFill, Sequence, Video, staticFile, interpolate, useCurrentFrame} from 'remotion';

import {ExtraPolateOptions} from '../constants';
import TextTheme from './TextTheme/TextTheme';

const Sence2: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [570, 620], [1, 0], {...ExtraPolateOptions});
	return (
		<AbsoluteFill>
			<Sequence from={150} durationInFrames={460} style={{opacity}}>
				<TextTheme />
			</Sequence>
			<Sequence from={140} durationInFrames={480}>
				<AbsoluteFill
					style={{
						zIndex: '-1',
						height: '100%',
						width: '100%',
					}}
				>
					<Video
						src={staticFile('background.mp4')}
						loop={false}
						muted={true}
						style={{
							objectFit: 'cover',
							height: '100%',
						}}
						playbackRate={0.8}
					/>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
export default Sence2;
