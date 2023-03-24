import {Composition} from 'remotion';
import Intro from './Content/Intro';

import {MyVideo} from './Video';
import './index.css';
import TextTheme from './Sence2/TextTheme/TextTheme';
import Chart from './Sence3/Component/Chart';
import BackGround from './Sence3/Component/Background';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition id="MyVideo" component={MyVideo} durationInFrames={980} width={1080} height={1920} fps={30} />
			<Composition id="Intro" component={Intro} durationInFrames={120} width={720} height={1080} fps={30} />
			<Composition id="TextTheme" component={TextTheme} durationInFrames={300} width={1080} height={1920} fps={30} />
			<Composition id="Chart" component={Chart} durationInFrames={300} width={1920} height={1080} fps={30} />
			<Composition id="BackGround" component={BackGround} durationInFrames={300} width={1920} height={1080} fps={30} />
		</>
	);
};
