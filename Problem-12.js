
function* tri_gen() {
	var i = 1;
	var t = 0;
	while(1) {
		t = t + i;
		yield t;
	}
}

function divisors(t) {
	var d = 0;
	for(var i = 1; i < t + 1; i++) {
		if(t % i == 0) {
			d++;
		}
	}
	return d;
}

var tri = tri_gen();
var t;

while(1) {
	t = tri.next().value;
	if(divisors(t) >= 500) {
		console.log(t);
		break;
	}
}

