
function* tri_gen() {
	var i = 1;
	var t = 0;
	while(1) {
		t = t + i;
		i++;
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
var d;

while(1) {
	t = tri.next().value;
	d = divisors(t);
	console.log(t, d);
	if(d >= 500) {
		console.log(t);
		break;
	}
}

