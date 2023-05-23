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

// Original solution
/*
const addExtraDataPoint = (arr: number[]) => {
	const extraPointArr = []
	for (let i = 0; i < arr.length-1; i++) {
		extraPointArr.push((arr[i]+arr[i+1])/2)
	}
	for(let j = 0; j < extraPointArr.length; j ++){
    let index = (j+1)*2-1;
    arr.splice(index,0,extraPointArr[j])
  }
  return arr
};
*/
