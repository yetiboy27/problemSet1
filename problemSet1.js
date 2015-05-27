var letterCapitalize = function(longString) {
	var splitArray = longString.split(" ");
	for (var i = 0; i < splitArray.length; i++) {
		var letterArray	= splitArray[i].split('');
		letterArray[0] = letterArray[0].toUpperCase();
		splitArray[i] =letterArray.join('');
	}
	return splitArray.join(' ');
}
console.log(letterCapitalize('Does this work?'));

//--------------------------------------------------

var wordcount = function(splitString) {
	var splitArray = splitString.split(" ");
	return splitArray.length;
}