import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import BlinkMovableShapes from './Component/BlinkMovableShapes';
import Line from './Component/Line';
import SubContent from './Component/Subcontent';

import {TextContent} from '@/Assets/Scene1';
import {useMemo} from 'react';
import './style.css';

const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const outroOpacity = interpolate(frame, [145, 150], [1, 0]);

	const contents = useMemo(() => {
		return TextContent.split('\n');
	}, []);

	return (
		<>
			<AbsoluteFill
				style={{
					opacity: `${outroOpacity}`,
				}}
			>
				<BlinkMovableShapes />
				<div className="content-container">
					<div className="content">
						{contents.map((text, idx) => (
							<Line key={idx} content={text} startFrame={idx * 5} endFrame={idx * 5 + 15} />
						))}
					</div>
					<SubContent />
				</div>
			</AbsoluteFill>
		</>
	);
};

export default Intro;
