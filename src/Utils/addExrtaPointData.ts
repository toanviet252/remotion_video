export const addExtraDataPoint = (arr: number[], numberRecursion?: number): number[] => {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		newArray.push(arr[i]);
		if (i < arr.length - 1) {
			newArray.push((arr[i] + arr[i + 1]) / 2);
		}
	}
	if (!numberRecursion) return newArray;

	let temp = newArray;
	for (let i = numberRecursion; i > 0; i--) {
		temp = addExtraDataPoint(temp);
	}
	return temp;
};
