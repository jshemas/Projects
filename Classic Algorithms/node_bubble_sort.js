// Setting up stdin and stdout
process.stdin.resume();
process.stdin.setEncoding('utf8'); 

/**
 * bubbleSort
 * @param string str - the user input that needs to be bubble sorted - ex "2,3,5,4,7,1"
 * @return - return the sorted array
 */
function bubbleSort(str) {
	// split the string into an array
	var numberArray = str.split(','),
		done = false,
		tmp = '';
	while (!done) {
		done = true;
		for (var i = 1; i < numberArray.length; i++) {
			// is the pair out of order?
			if (numberArray[i - 1] > numberArray[i]) {
				// swap them out and set done flag
				tmp = numberArray[i - 1];
				numberArray[i - 1] = numberArray[i];
				numberArray[i] = tmp;
				done = false;
			}
		}
	}
	return numberArray;
}

/**
 * handle input
 * @param string str - the user input
 * @return - the user's modify input
 */
function handle_input(callback) {
	var stdin = process.stdin;
	stdin.resume();
	stdin.once('data', function(data) {
		data.toString().trim();
		// this will remove all sorts of line breaks
		data = data.replace(/(\r\n|\n|\r)/gm,'');
		callback(bubbleSort(data));
	});
}

console.log("Enter the comma separated list you want to bubble sort!");

handle_input(function(res) {
	console.log("Sorted List: ",res);
	process.exit();
});