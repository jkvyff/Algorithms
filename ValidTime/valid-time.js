function validTime(time) {
	let [h,m] = time.split(':');
	if (h < 23 && h > 0 && m < 59 && m > 0) {
		console.log(true);
		return true;
	}
	console.log(h, m)
	console.log(false);
	return false;
}

validTime("13:58");
validTime("25:51");
validTime("02:76");
