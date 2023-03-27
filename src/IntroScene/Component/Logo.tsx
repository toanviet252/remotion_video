import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

const Logo: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			className="logo"
			style={{
				opacity,
			}}
		>
			<Img
				src={staticFile('refinitiv_icon.png')}
				style={{
					width: '350px',
					objectFit: 'contain',
				}}
			/>
		</div>
	);
};
export default Logo;
