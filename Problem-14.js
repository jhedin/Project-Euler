// brute force

// should cache the results, and build upwards

function chain(x) {
	var n = 1;
	while(x > 1) {
		n++;
		if(x%2 == 0) {
			x = x/2;
		}
		else {
			x = 3*x + 1;
		}
	}
	return n;
}

var max = {x: 1, n: 1};
var test;
for( var i = 1000000; i > 1; i--) {
	test = {x: i, n: chain(i)};
	if(test.n > max.n) {
		max = test;
	}
}

console.log(max);