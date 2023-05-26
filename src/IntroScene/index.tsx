import {Easing, Sequence} from 'remotion';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import BlinkMovableShapes from './Component/BlinkMovableShapes';
import Line from './Component/Line';
import SubContent from './Component/Subcontent';
import {TextContent, RectangleTransition} from '@/Assets/Scene1';
import {useEffect, useMemo, useRef, useState} from 'react';
import './style.css';

const Transition = {
	start: 135,
	end: 175,
};

const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [mask, setMask] = useState<string>();
	const outroOpacity = interpolate(frame, [Transition.start, Transition.end], [1, 0]);

	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current.getContext('2d');
		if (!ctx) return;
		ctx.clearRect(0, 0, 1080, 1920);

		const {start, end} = Transition;
		const duration = end - start;
		const {wD, hD, dataTransition} = RectangleTransition;

		for (let x = 0; x < wD; x++) {
			for (let y = 0; y < hD; y++) {
				const transition = dataTransition[x][y];
				ctx.beginPath();
				if (transition.startAt === transition.endAt) {
					if (frame >= start) continue;
					else {
						ctx.fillStyle = `rgba(0,0,0, 255)`;
						ctx.fillRect((x * 1080) / wD, (y * 1920) / hD, 1080 / wD, 1920 / hD);
					}
				} else {
					const opacity = interpolate(
						frame,
						[start + duration * transition.startAt, start + duration * transition.endAt],
						[255, 0],
						{
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
							easing: Easing.inOut(Easing.cubic),
						}
					);
					ctx.fillStyle = `rgba(0,0,0, ${opacity})`;
					ctx.fillRect((x * 1080) / wD, (y * 1920) / hD, 1080 / wD, 1920 / hD);
				}
			}
		}

		setMask(canvasRef.current.toDataURL());
	}, [frame]);

	const contents = useMemo(() => {
		return TextContent.split('\n');
	}, []);

	return (
		<Sequence durationInFrames={180}>
			<canvas ref={canvasRef} width={1080} height={1920} style={{display: 'none'}} />
			<AbsoluteFill
				style={{
					opacity: `${outroOpacity}`,
					WebkitMaskImage: `url(${mask})`,
					maskImage: `url(${mask})`,
					maskSize: '100%',
					WebkitMaskSize: '100%',
					maskRepeat: 'no-repeat',
					WebkitMaskRepeat: 'no-repeat',
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
		</Sequence>
	);
};

export default Intro;
