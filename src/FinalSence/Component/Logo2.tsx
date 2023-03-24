export const Logo2: React.FC<{opacity: number; translate?: number}> = ({opacity, translate}) => {
	return (
		<svg
			width="652"
			height="652"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlSpace="preserve"
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
					id="Shape"
					className="st0"
					d="m412,382.1l-21.2,0l-74,-74l84.5,0l0,14.8l-48.5,0l59.2,59.2zm-10.7,-133.2l-133.1,0l0,133.2l14.8,0l0,-118.3l118.3,0l0,-14.9z"
					fill="#001EFF"
				/>
			</g>
		</svg>
	);
};
