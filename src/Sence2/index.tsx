import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, Video} from 'remotion';

import {VideoFile} from '@/Assets/Scene2';
import {ExtraPolateOptions} from '@/constants';
import TextContent from './TextContent';

const Sence2: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [570, 620], [1, 0], {...ExtraPolateOptions});
	return (
		<AbsoluteFill>
			<Sequence from={150} durationInFrames={460} style={{opacity}}>
				<TextContent durationInFrames={460} />
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
						muted
						src={VideoFile}
						loop={false}
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
