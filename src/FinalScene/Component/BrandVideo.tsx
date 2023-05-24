import {BrandVideoFile} from '@/Assets/Scene2';
import {Video, Sequence} from 'remotion';

const BrandVideo: React.FC = () => {
	return (
		<Sequence from={20}>
			<Video muted src={BrandVideoFile} loop={false} />;
		</Sequence>
	);
};
export default BrandVideo;
