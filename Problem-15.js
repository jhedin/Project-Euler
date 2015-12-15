

function f(x,y) {
	if(y == 1) {
		return x+1;
	}
	if(x == 1) {
		return y+1;
	}
	return f(x,y-1) + f(x-1,y);
}

console.log(f(20,20));