import ShapeData from '@/shape.json';
import {renderOpacityAndTransitionValue} from '@/Utils/renderValue';
import {useCurrentFrame} from 'remotion';
import Shape from './Shape';

const ShapeContainer: React.FC = () => {
	const frame = useCurrentFrame();

	// Create random data

	// const colorArray = ['white', 'yellow', 'blue'];
	// const shapeColumns = useMemo(() => {
	// 	return new Array(8).fill(true).map((_, i) => {
	// 		return {
	// 			id: i,
	// 			shapes: new Array(Math.floor(random(i) * 10)).fill(true).map((_, index) => {
	// 				const height = random('height' + index) * 30;
	// 				const color = colorArray[Math.floor(random('color' + index) * colorArray.length)];
	// 				const top = Math.floor(random('top' + index) * 100);
	// 				const margin = random('margin' + index) * 30;
	// 				const opacityDuration = Math.trunc(random('opacity' + index) * 100);
	// 				const transitionDuration = Math.trunc(random('transition' + index) * 120);
	// 				return {height, color, top, margin, opacityDuration, transitionDuration};
	// 			}),
	// 		};
	// 	});
	// }, []);

	return (
		<div className="shape-container">
			{ShapeData.map((shapeColumn) => {
				return (
					<div
						key={shapeColumn.id}
						className="shape-column"
						style={{width: '12.5%', height: '100%', position: 'relative'}}
					>
						{shapeColumn.shapes.map((shape, index) => {
							const {opacity, translationY} = renderOpacityAndTransitionValue(
								frame,
								shape.opacityDuration,
								shape.transitionDuration
							);
							return (
								<Shape
									key={index}
									backgroundColor={shape.color}
									height={shape.height}
									top={shape.top}
									opacity={opacity}
									translateY={translationY}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
export default ShapeContainer;
