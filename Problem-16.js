
function mult2 (s) {
	var carry = 0;
	var out = [];
	var res = 0;
	for(var i = 0; i < s.length; i++) {
		res = 2 * s[s.length - 1 - i] + carry;
		carry = Math.floor(res / 10);
		out.unshift(res % 10);
	}
	if(carry != 0) {
		out.unshift(carry);
	}
	return out;
}

var val = [1];

for(var i = 0; i < 1000; i++) {
	val = mult2(val);
}

//console.log(val.join(""));
console.log(val.reduce(function(a,b){return a+b}));
