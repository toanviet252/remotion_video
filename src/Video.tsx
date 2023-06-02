import FinalScene from './FinalScene';
import Scene2 from './Scene2';
import Scene3 from './Scene3';
import Intro from './IntroScene';

export enum Locale {
	'eng' = 'en-US',
	'vie' = 'vi-VN',
	'kor' = 'ko-KR',
}
export const initLocale = Locale.kor;

export const MyVideo: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backfaceVisibility: 'hidden',
				zIndex: '10',
				fontFamily: initLocale === 'ko-KR' ? 'Noto Sans KR' : 'Open Sans',
			}}
		>
			<Intro />
			<Scene2 />
			<Scene3 />
			<FinalScene />
		</div>
	);
};
