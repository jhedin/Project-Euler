

// use a generator to create fib sequence

function* fib_gen() {
	var vals = [1,1]
	while( vals[0] + vals[1] <= 4000000) {
		vals.push(vals[0] + vals[1]);
		vals.shift();
		yield vals[1];
	}
}


var sum = 0;
var fib = fib_gen(); 
for(var i = fib.next() ; i.done == false; i = fib.next()) {
	if(i.value % 2 == 0) {
		sum += i.value;
	}
}

console.log(sum);