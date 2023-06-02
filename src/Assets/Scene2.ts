import {staticFile} from 'remotion';
import {Locale} from '@/Video';

export const VideoFile = staticFile('background.mp4');

export const TextContent = (locale: string) => {
	if (locale === Locale.vie) {
		return `Amazon ra mắt tính năng phát video trực tuyến tại thị trường Ấn Độ để thúc đẩy doanh số bán hàng. Liên kết với phương tiện truyền thông để tổ chức các buổi phát trực tiếp, tương tác với khách hàng và cung cấp các ưu đãi trong thời gian giới hạn. Phổ biến tại Trung Quốc, Youtube cũng mở rộng mua sắm trực tuyến qua các phát sóng trực tiếp`;
	}
	if (locale === Locale.kor) {
		return `아마존은 인도에서 판매를 촉진하기 위해 라이브 스트리밍 비디오 기능을 출시했습니다. 소셜 미디어 영향력 있는 인물들과 협력하여 라이브 스트리밍을 진행하고 고객과 상호작용하며 제한 기간 동안 특가 상품을 제공합니다. 중국에서 인기가 있으며 유튜브도 라이브 스트리밍 쇼핑을 확대했습니다.`;
	}
	return `Amazon launches live-streaming video feature in India to drive sales. Tied up with social media influences to host live-streams, interact with customers, and offer limited period deals. Popular in China, Youtube also expanded live-stream shopping`;
};

export const BrandVideoFile = staticFile('brandvideo.mp4');
