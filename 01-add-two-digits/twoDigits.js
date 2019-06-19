function twoDigits(n) {
	let [f,l,x] = n.toString().split("");
	let fin = parseInt(f);
	let lin = parseInt(l);
	if ((fin > 0 && fin <= 9) && (lin >= 0 && lin <= 9) && x === undefined) {
		let ans = fin + lin;
		console.log(ans);
		return ans;
	}
	return null;
}

twoDigits(09); // null
twoDigits(29); // 11
twoDigits(119); // null