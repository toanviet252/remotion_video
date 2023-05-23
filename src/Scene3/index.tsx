import {
	AMZDailyChallenge,
	AMZDailyPercentage,
	AMZStockPrice,
	NDXIndexChange,
	NDXIndexPercentage,
	NDXStockPrice,
} from '@/Assets/Scene3';
import {ExtraPolateOptions} from '@/constants';
import {AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';
import BackGround from './Component/Background';
import Chart from './Component/Chart';
import Footer from './Component/Footer';
import Logo from './Component/Logo';
import NumberAnimation from './Component/NumberAnimation';
import TextAnimation from './Component/TextAnimation';
import './index.css';

const Scene3: React.FC = () => {
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
			{/* <h1 style={{color: 'white'}}>Frame: {frame}</h1> */}
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
							<NumberAnimation
								startNumber={AMZStockPrice[0]}
								endNumber={AMZStockPrice[1]}
								frameRange={[30, 70]}
								backgroundColor="#0520ff"
							/>
						</div>
						<div className="stock-item">
							<div>
								<TextAnimation text="Daily Challenge" startFrame={40} endFrame={60} translateYArray={[-50, 0]} />
							</div>
							<NumberAnimation
								startNumber={AMZDailyChallenge[0]}
								endNumber={AMZDailyChallenge[1]}
								frameRange={[40, 80]}
								backgroundColor="#ff5706"
							/>
						</div>
						<div className="stock-item">
							<div>
								<TextAnimation text="Daily Percentage" startFrame={50} endFrame={70} translateYArray={[-50, 0]} />
							</div>
							<NumberAnimation
								startNumber={AMZDailyPercentage[0]}
								endNumber={AMZDailyPercentage[1]}
								frameRange={[50, 90]}
								backgroundColor="#58ca95"
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
								opacity: opacityLabel(50),
								transform: `translateY(${translateLabel(50)}px)`,
							}}
						>
							.NDX
						</span>
					</div>

					<div className="chart-container" style={{height: '50rem', width: '100%'}} />

					<div className="stock-value-container">
						<div className="stock-item">
							<span>
								<TextAnimation text=".NDX Price" startFrame={110} endFrame={130} translateYArray={[-50, 0]} />
							</span>
							<NumberAnimation
								startNumber={NDXStockPrice[0]}
								endNumber={NDXStockPrice[1]}
								frameRange={[110, 150]}
								backgroundColor="white"
								fontColor="#273cff"
							/>
						</div>
						<div className="stock-item">
							<span>
								<TextAnimation text="Index Change" startFrame={130} endFrame={150} translateYArray={[-50, 0]} />
							</span>
							<NumberAnimation
								startNumber={NDXIndexChange[0]}
								endNumber={NDXIndexChange[1]}
								frameRange={[130, 170]}
								backgroundColor="#ff5706"
								fontColor="white"
							/>
						</div>
						<div className="stock-item">
							<span>
								<TextAnimation text="Index Percentage" startFrame={150} endFrame={170} translateYArray={[-50, 0]} />
							</span>
							<NumberAnimation
								startNumber={NDXIndexPercentage[0]}
								endNumber={NDXIndexPercentage[1]}
								frameRange={[150, 180]}
								backgroundColor="#ff5706"
								fontColor="white"
								notation="%"
							/>
						</div>
					</div>

					<Footer />
				</AbsoluteFill>
			</Sequence>

			<AbsoluteFill className="Chart" style={{zIndex: '100', position: 'absolute', height: '50%', top: '32%'}}>
				<Sequence from={650} durationInFrames={210} style={{margin: '4rem', width: '90%', opacity: `${opacity2}`}}>
					<Chart durationInFrames={150} />
				</Sequence>
			</AbsoluteFill>
		</>
	);
};
export default Scene3;
