import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, Easing} from 'remotion';
import Logo from './Component/Logo';
import NumberAnimation from './Component/NumberAnimation';
import TextAnimation from './Component/TextAnimation';
import Footer from './Component/Footer';
import './index.css';
import Chart from './Component/Chart';
import {ExtraPolateOptions} from '../constants';
import BackGround from './Component/Background';

const Sence3: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [590, 610], [0, 1], {...ExtraPolateOptions});
	const opacity2 = interpolate(frame, [650, 680], [0, 1], {...ExtraPolateOptions});

	// For label
	const opacityLabel = (delay: number) => {
		return interpolate(frame - delay, [650, 680], [0, 1], {...ExtraPolateOptions});
	};
	const translateLabel = (delay: number) => {
		return interpolate(frame - delay, [650, 660], [-60, 0], {...ExtraPolateOptions, easing: Easing.ease});
	};
	return (
		<>
			<Sequence from={590} durationInFrames={270}>
				<AbsoluteFill
					className="background-sence3"
					style={{zIndex: '-1', filter: 'blur(10px)', backgroundColor: 'black', opacity}}
				>
					<BackGround />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={590} durationInFrames={270}>
				<AbsoluteFill
					style={{
						opacity,
						color: 'white',
						padding: '8rem',
					}}
				>
					<Logo />

					<div className="stock-value-container">
						<div className="stock-item">
							<div>
								<TextAnimation text="AMZN.O Price" startFrame={30} endFrame={40} translateYArray={[-50, 0]} />
							</div>
							<NumberAnimation startNumber={48} endNumber={113} frameRange={[30, 70]} backgroundColor={'#0520ff'} />
						</div>
						<div className="stock-item">
							<div>
								<TextAnimation text="Daily Challange" startFrame={40} endFrame={60} translateYArray={[-50, 0]} />
							</div>
							<NumberAnimation startNumber={-0.5} endNumber={-1.8} frameRange={[40, 80]} backgroundColor={'#ff5706'} />
						</div>
						<div className="stock-item">
							<div>
								<TextAnimation text="Daily Percentage" startFrame={50} endFrame={70} translateYArray={[-50, 0]} />
							</div>
							<NumberAnimation
								startNumber={-0.6}
								endNumber={-1.56794425}
								frameRange={[50, 90]}
								backgroundColor={'#58ca95'}
								notation="%"
							/>
						</div>
					</div>

					<div className="chart-label">
						<span
							style={{
								backgroundColor: 'blue',
								color: 'white',
								left: '-5%',
								opacity: opacityLabel(0),
								transform: `translateY(${translateLabel(0)}px)`,
							}}
						>
							AMZN.O
						</span>
						<span
							style={{
								backgroundColor: 'white',
								color: 'blue',
								right: '-5%',
								opacity: opacityLabel(15),
								transform: `translateY(${translateLabel(15)}px)`,
							}}
						>
							.NDX
						</span>
					</div>

					<div className="chart-container" style={{height: '50rem', width: '100%'}}></div>

					<div className="stock-value-container">
						<div className="stock-item">
							<span>
								<TextAnimation text=".NDX Price" startFrame={100} endFrame={120} translateYArray={[-50, 0]} />
							</span>
							<NumberAnimation
								startNumber={0}
								endNumber={10971.222}
								frameRange={[100, 140]}
								backgroundColor={'white'}
								fontColor={'#273cff'}
							/>
						</div>
						<div className="stock-item">
							<span>
								<TextAnimation text="Index Change" startFrame={120} endFrame={140} translateYArray={[-50, 0]} />
							</span>
							<NumberAnimation
								startNumber={0}
								endNumber={-193.558}
								frameRange={[120, 160]}
								backgroundColor={'#ff5706'}
								fontColor={'white'}
							/>
						</div>
						<div className="stock-item">
							<span>
								<TextAnimation text="Index Percentage" startFrame={140} endFrame={160} translateYArray={[-50, 0]} />
							</span>
							<NumberAnimation
								startNumber={0}
								endNumber={-0.02}
								frameRange={[140, 180]}
								backgroundColor={'#ff5706'}
								fontColor={'white'}
								notation="%"
							/>
						</div>
					</div>

					<Footer />
				</AbsoluteFill>
			</Sequence>

			<AbsoluteFill className="Chart" style={{zIndex: '100', position: 'absolute', height: '50%', top: '32%'}}>
				<Sequence from={650} durationInFrames={210} style={{margin: '4rem', width: '90%', opacity: `${opacity2}`}}>
					<Chart />
				</Sequence>
			</AbsoluteFill>
		</>
	);
};
export default Sence3;
