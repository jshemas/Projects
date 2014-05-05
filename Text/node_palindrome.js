// Setting up stdin and stdout
process.stdin.resume();
process.stdin.setEncoding('utf8'); 

/**
 * palindrome
 * @param string str - the user input that needs to be reverse to see if its a palindrome
 * @return - true if palindrome / false if not a palindrome
 */
function palindrome(str) {
	// reverse() is a method of array instances
	// It won't work on a string, so you'll have to spilt the string into an array
	// then reverse it, then put it back together and remove whitespace at the end
	var reverse_str = str.split('').reverse().join('').trim();
	// if the reverse string is the same as str, then its a palindrome
	if (reverse_str == str.trim()) {
		return true;
	} else {
		return false;
	}
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
		callback(palindrome(data));
	});
}

console.log("Enter the String you want to see if its a palindrome!");

handle_input(function(res) {
	if (res) {
		console.log("That is ... a palindrome!!!");
	} else {
		console.log("That is ... not a palindrome.");
	}
	process.exit();
});