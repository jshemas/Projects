// Setting up stdin and stdout
process.stdin.resume();
process.stdin.setEncoding('utf8'); 

/**
 * reverse string
 * @param string str - the user input that needs to be reverse
 * @return - The reversed string
 */
function reverseString(str) {
	// reverse() is a method of array instances
	// It won't work on a string, so you'll have to spilt the string into an array
	// then reverse it, then put it back together
	return str.split('').reverse().join('');
}

/**
 * handle input
 * @param string str - the user input
 * @return - the user's modify input
 */
function handle_input(str, callback) {
	var stdin = process.stdin;
	stdin.resume();
	stdin.once('data', function(data) {
		data = reverseString(data);
		callback(data);
	});
}
console.log("Enter the String you want to reverse!")
handle_input("String", function(str) {
	console.log("Reversed String: ", str);
	process.exit();
});