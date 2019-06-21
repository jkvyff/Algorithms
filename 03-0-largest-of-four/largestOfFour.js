function largestOfFour(arrays) {
	let newArray = [];
	for (let array of arrays) {
		let largest = array[0];
		for (let i = 0; i < array.length; i++) {
			if (array[i] >= largest) largest = array[i];
		}
		newArray.push(largest);
	}
	console.log(newArray);
	return newArray;
}

let input1 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let input2 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];

largestOfFour(input1); // [5, 27, 39, 1001]
largestOfFour(input2); // [9, 35, 97, 1000000]