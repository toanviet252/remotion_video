export const Logo2Part2: React.FC<{opacity: number; translate?: number}> = ({opacity, translate}) => {
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
				<title>Layer 1</title>
				<path
					fill="#001EFF"
					d="m412,382.1l-21.2,0l-74,-74l84.5,0l0,14.8l-48.5,0l59.2,59.2z"
					className="st0"
					id="Shape"
				/>
			</g>
		</svg>
	);
};
