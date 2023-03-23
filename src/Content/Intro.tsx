import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import Line from './Component/Line';
import ShapeContainer from './Component/ShapeContainer';
import SubContent from './Component/Subcontent';

import './intro.css';

const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const outroOpacity = interpolate(frame, [145, 150], [1, 0]);
	return (
		<>
			<AbsoluteFill
				style={{
					opacity: `${outroOpacity}`,
				}}
			>
				<ShapeContainer />
				<div className="content-container">
					<div className="content">
						<Line content="Amazon india rolls" startFrame={0} endFrame={15} />
						<Line content="out live-stream" startFrame={5} endFrame={20} />
						<Line content="shopping to drive" startFrame={10} endFrame={25} />
						<Line content="festive season" startFrame={15} endFrame={30} />
						<Line content="sales" startFrame={20} endFrame={35} />
					</div>

					<SubContent />
				</div>
			</AbsoluteFill>
		</>
	);
};

export default Intro;
