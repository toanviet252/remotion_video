export const chunk = (array: string[], hash: number): Array<string[]> => {
	if (hash <= 0) return [array];
	const rs: Array<string[]> = [];
	while (hash < array.length) {
		const ele: string[] = array.splice(0, hash);
		rs.push(ele);
	}
	rs.push(array);

	return rs;
};
