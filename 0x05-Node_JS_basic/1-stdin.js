const readline = require('readline');

const rdl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rdl.question('Welcome to Holberton School, what is your name?\n', (input) => {
	// print the input to the console
	console.log(`Your name is: ${input}`);

	rdl.close();
	
});

rdl.on('close', () => {
	process.stdout.write('This important software is now closing\n');

});
