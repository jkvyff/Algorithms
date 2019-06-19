function allLongestStrings(array) {
	let longest = 0;
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if(array[i].length > longest) {
			newArray = [];
			longest = array[i].length
			newArray.push(array[i]);
		} else if (array[i].length === longest) {
			newArray.push(array[i]);
		}
	}
	console.log(newArray);
	return newArray;
}

let input = ["aba", "aa", "ad", "vcd", "aba"];
let input2 = ["sim", "lamp", "herald", "simp", "tumble", "limb"];


allLongestStrings(input); // [ 'aba', 'vcd', 'aba' ]
allLongestStrings(input2); // [ 'herald', 'tumble' ]