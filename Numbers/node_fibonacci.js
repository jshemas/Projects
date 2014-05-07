// Setting up stdin and stdout
process.stdin.resume();
process.stdin.setEncoding('utf8'); 

/**
 * fibonacci
 *		The Fibonacci Sequence is the series of numbers:
 *		0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 *		The next number is found by adding up the two numbers before it
 * @param string num - the user input we need to find the series for - ex: 5
 * @return - return the fibonacci series - ex: 0,1,1,2,3,5
 */
function fibonacci(num) {
	var first = 0, 
		second = 1, 
		next,
		list = '';

	for (i = 1; i <= num; i++) {
		if (i <= 1) {
			next = i;
		} else {
			next = first + second;
			first = second;
			second = next;
		}
		// if list isn't set to anything, set it to next
		if (list == '') {
			list = next;
		} else {
			list = list + ',' + next;
		}
	}
	return list;
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
		callback(fibonacci(data));
	});
}

console.log("Enter the number you want to see a fibonacci series for");

handle_input(function(res) {
	console.log("Fibonacci Series: ",res);
	process.exit();
});