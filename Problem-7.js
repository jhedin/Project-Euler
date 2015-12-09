
// finding primes

var primes = [2,3,5,7,11,13];


var x = 14;
var is_prime = true;
while(primes.length < 10001) {
	is_prime = true;

	// test divisibility by each prime
	for(var i = 0; i < primes.length; i++) {
		if(x % primes[i] == 0) {
			is_prime = false;
			break;
		}
	}
	if(is_prime) {
		primes.push(x);
	}
	x++;
}

console.log(primes[10000]);
