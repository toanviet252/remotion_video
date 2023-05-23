export const Logo2Part1: React.FC<{opacity: number; translate?: number}> = ({opacity, translate}) => {
	return (
		<svg
			width="652"
			height="652"
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			version="1.1"
			style={{
				position: 'absolute',
				right: '-5%',
				top: '15%',
				opacity,
				transform: `translate(${translate}px,${translate}px)`,
			}}
		>
			<g>
				<title>Layer 2 part 1</title>
				<path
					fill="#001EFF"
					d="m390.8,384.1zm10.5,-133.2l-133.1,0l0,133.2l14.8,0l0,-118.3l118.3,0l0,-14.9z"
					className="st0"
					id="Shape"
				/>
			</g>
		</svg>
	);
};
