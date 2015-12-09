
function* perimeter_gen() {
	for(var i = 1; i < 998; i++) {
		for(var j = i + 1; i + j < 999; j++) {
			yield {a:i, b:j, c:1000 - i - j};
		}
	}
}

var gen = perimeter_gen();

while(1) {
	triple = gen.next().value;
	if(triple.a*triple.a + triple.b*triple.b == triple.c*triple.c)
		break;
}

console.log(triple.a*triple.b*triple.c);