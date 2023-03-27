import { Sequence } from 'remotion';
import FinalScene from './FinalScene';
import Intro from './IntroScene';
import Scene2 from './Scene2';
import Scene3 from './Scene3';

export const MyVideo: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backfaceVisibility: 'hidden',
				zIndex: '10',
			}}
		>
			<Sequence durationInFrames={150}>
				<Intro />
			</Sequence>
			<Scene2 />
			<Scene3 />
			<FinalScene />
		</div>
	);
};
