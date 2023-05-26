import {Composition} from 'remotion';
import Intro from './IntroScene';

import './index.css';
import TextContent from './Scene2/Component/TextContent';
import BackGround from './Scene3/Component/Background';
import Chart from './Scene3/Component/Chart';
import {MyVideo} from './Video';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition id="MyVideo" component={MyVideo} durationInFrames={980} width={1080} height={1920} fps={30} />
			<Composition id="Intro" component={Intro} durationInFrames={120} width={720} height={1080} fps={30} />
			<Composition id="TextTheme" component={TextContent} durationInFrames={300} width={1080} height={1920} fps={30} />
			<Composition id="Chart" component={Chart} durationInFrames={300} width={1920} height={1080} fps={30} />
			<Composition id="BackGround" component={BackGround} durationInFrames={300} width={1920} height={1080} fps={30} />
		</>
	);
};
