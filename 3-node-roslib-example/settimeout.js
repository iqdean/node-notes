//setTimeout(callback, delay)  
// does a one-time callback to function test()
// after a delay of 1000ms

// to run this from the command line 
// with node already installed

// $ node settimeout.js

function test() {
	console.trace();
	setTimeout(test, 1000);
}

test();



