const Shape: React.FC<{
	height: number;
	backgroundColor: string;
	opacity: number;
	top: number;
	translateY: number;
}> = ({height, backgroundColor, opacity, translateY, top}) => {
	return (
		<div style={{margin: '1rem 0'}}>
			<div
				style={{
					width: '100%',
					position: 'absolute',
					height: `${height}px`,
					backgroundColor,
					opacity,
					transform: `translateY(${translateY}px)`,
					top: `${top}%`,
					left: '0',
				}}
			/>
		</div>
	);
};
export default Shape;
