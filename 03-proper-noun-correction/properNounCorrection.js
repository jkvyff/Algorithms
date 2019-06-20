function properNounCorrection(noun) {
	let propNoun = noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase();
	console.log(propNoun);
	return propNoun;
}

properNounCorrection("pARiS"); // Paris
properNounCorrection("John"); // John