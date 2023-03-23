import {AbsoluteFill, Sequence, useCurrentFrame, interpolate} from 'remotion';
import Logo from './Component/Logo';
import NumberAnimation from './Component/NumberAnimation';
import TextAnimation from './Component/TextAnimation';
import Footer from './Component/Footer';
import './index.css';

const Sence3: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [590, 610], [0, 1]);

	return (
		<Sequence from={590}>
			<AbsoluteFill
				style={{
					backgroundColor: 'black',
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

				<div className="chart-container" style={{height: '40rem', width: '100%', backgroundColor: 'gray'}}></div>

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
							backgroundColor={'white'}
							fontColor={'#273cff'}
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
							backgroundColor={'white'}
							fontColor={'#273cff'}
							notation="%"
						/>
					</div>
				</div>

				<Footer />
			</AbsoluteFill>
		</Sequence>
	);
};
export default Sence3;
