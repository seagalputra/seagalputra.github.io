import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export function formatDate(text: string) {
	const date = dayjs(text, 'YYYY-MM-DD');

	return date.format('MMMM DD, YYYY');
}

export function yearFromDate(text: string) {
	const date = dayjs(text, 'YYYY-MM-DD');

	return date.year().toString();
}
