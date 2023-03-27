import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {ExtraPolateOptions} from '@/constants';
import {Logo1} from './Component/Logo1';
import {Logo2} from './Component/Logo2';

const FinalScene: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = (delay: number) => {
		return interpolate(frame - delay, [850, 870], [0, 1], {...ExtraPolateOptions});
	};
	const translateY = (delay: number, translateArr: [number, number]) => {
		return interpolate(frame - delay, [850, 860], translateArr, {...ExtraPolateOptions});
	};
	return (
		<Sequence from={850}>
			<AbsoluteFill style={{backgroundColor: 'white', opacity: opacity(0)}}>
				<Logo1 opacity={opacity(15)} translate={translateY(15, [800, 0])} />

				<Logo2 opacity={opacity(40)} translate={translateY(40, [300, 0])} />

				<div className="banner">
					<span
						style={{
							fontSize: '5rem',
							backgroundColor: 'blue',
							fontWeight: '800',
							textTransform: 'uppercase',
							color: 'white',
							position: 'absolute',
							bottom: '45%',
							left: '50%',
							transform: 'translate(-50%,-50%)',
							display: 'inline-block',
							width: '60%',
							textAlign: 'center',
							opacity: opacity(20),
						}}
					>
						Trade now
					</span>
				</div>

				<div className="footer">
					<p
						style={{
							textAlign: 'center',
							fontSize: '4.5rem',
							fontWeight: '600',
							position: 'absolute',
							bottom: '15%',
							width: '100%',
							opacity: opacity(60),
						}}
					>
						An LSEG Business
					</p>
				</div>
			</AbsoluteFill>
		</Sequence>
	);
};
export default FinalScene;
