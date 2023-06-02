import {formatTimeLocale} from '@/Utils/formatTimeLocale';
import {Locale} from '@/Video';

export const TextContent = (locale: string) => {
	if (locale === Locale.vie)
		return `Amazon Ấn Độ triển khai mua sắm trực tiếp trên sóng để thúc đẩy mùa bán hàng dịp lễ hội`;
	if (locale === Locale.kor) {
		return `아마존 인도가 축제 시즌 판매 촉진을 위해 라이브 스트리밍 쇼핑을 롤아웃합니다`;
	}
	return `Amazon india rolls out live-stream shopping to drive festive season sale`;
};
export const EventDate = (locale: string) => {
	return formatTimeLocale(new Date('21 Oct 2022'), locale);
};
export const EventTime = '3:38:04';
export const RectangleTransition = {
	wD: 3,
	hD: 6,
	dataTransition: [
		[
			{startAt: 0.2, endAt: 0.5},
			{startAt: 0.5, endAt: 0.8},
			{startAt: 0.7, endAt: 1},
			{startAt: 0.1, endAt: 0.3},
			{startAt: 0, endAt: 0},
			{startAt: 0.4, endAt: 0.6},
		],
		[
			{startAt: 0, endAt: 0.3},
			{startAt: 0.5, endAt: 0.7},
			{startAt: 0.8, endAt: 1},
			{startAt: 0.4, endAt: 0.6},
			{startAt: 0.2, endAt: 0.5},
			{startAt: 0.1, endAt: 0.3},
		],
		[
			{startAt: 0.8, endAt: 1},
			{startAt: 0.5, endAt: 0.7},
			{startAt: 0, endAt: 0.05},
			{startAt: 0, endAt: 0.1},
			{startAt: 0.6, endAt: 0.9},
			{startAt: 0.7, endAt: 1},
		],
	],
};
