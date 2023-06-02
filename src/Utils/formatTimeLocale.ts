export const formatTimeLocale = (date: Date, locale: string) => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		year: 'numeric',
		month: 'short',
	};
	const rs = new Intl.DateTimeFormat(locale, options).format(new Date(date));
	return rs;
};
