// Setting up readline
var readline = require('readline'),
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

/**
 * floor_tile
 * Find Cost of Tile to Cover W x H Floor - 
 *	Calculate the total cost of tile it would take to cover a 
 *	floor plan of width and height, using a cost entered by the user.
 * @param string width - the user input the width - ex: 5
 * @param string height - the user input the height - ex: 10
 * @param string cost - the user input the cost- ex: $5.00
 * @return - the total price - ex: $250.00
 */
function floor_tile(width,height,cost) {
	// find the title sqare foot count
	var totalTileCount = width * height;
	// now find the total cost
	return totalTileCount * cost;
}

console.log("Enter width, height and cost per tile to find the total cost!");

rl.question("Width:", function(width) {
	rl.question("Height:", function(height) {
		rl.question("Cost:", function(cost) {
			console.log("Total Cost: $",floor_tile(width,height,cost));
			rl.close();
		});
	});
});