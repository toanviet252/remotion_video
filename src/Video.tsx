import {Sequence} from 'remotion';
import Intro from './Content/Intro';
import FinalSence from './FinalSence/FinalSence';
import Sence2 from './Sence2';
import Sence3 from './Sence3/Sence3';

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

			<Sence2 />

			<Sence3 />

			<FinalSence />
		</div>
	);
};
