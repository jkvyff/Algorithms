function containsDuplicates(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				console.log(true)
				return true;
			}
		}
	}
	console.log(false);
	return false;
}

input1 = ["hippo", "cat", "dog", "cat"]
input2 = [1, 2, 3, 4, 5, 2]
input3 = [1, 2, 3, 4, 5]
input4 = []

containsDuplicates(input1); // true
containsDuplicates(input2); // true
containsDuplicates(input3); // false
containsDuplicates(input4); // false