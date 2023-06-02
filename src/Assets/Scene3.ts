import {Locale} from '@/Video';

export const AMZStockPrice = [48, 113];
export const AMZDailyChallenge = [-0.5, -1.8];
export const AMZDailyPercentage = [-0.6, -1.56794425];

export const NDXStockPrice = [0, 10971.222];
export const NDXIndexChange = [0, -193.558];
export const NDXIndexPercentage = [0, -0.02];

export const EventDate = '30 Sep 2022';
export const EventTime = '10:49:16 AM';

export const BrandChart1 = 'AMZN.O';
export const BrandChart2 = '.NDX';

export const FooterText = (locale: string) => {
	return locale === Locale.vie ? 'Kể từ' : locale === Locale.kor ? '오전' : 'As of';
};

export const TextChartEng = {
	companyPrice: 'AMZN.O Price',
	dailyChange: 'Daily Challenge',
	dailyPercent: 'Daily Percentage',
	indexPrice: '.NDX Price',
	indexChange: 'Index Change',
	indexPercent: 'Index Percentage',
};
export const TextChartVn = {
	companyPrice: 'Giá AMZN.O',
	dailyChange: 'Biên độ ngày',
	dailyPercent: 'Tỉ lệ',
	indexPrice: 'Giá .NDX',
	indexChange: 'Biên độ',
	indexPercent: 'Tỉ lệ',
};
export const TextChartKor = {
	companyPrice: 'AMZN.O 가격',
	dailyChange: '일일 도전',
	dailyPercent: '일일 백분율',
	indexPrice: '.NDX 가격',
	indexChange: '인덱스 변경',
	indexPercent: '인덱스 비율',
};

export const TextChart = (locale: string) => {
	return locale === Locale.vie ? TextChartVn : locale === Locale.kor ? TextChartKor : TextChartEng;
};
