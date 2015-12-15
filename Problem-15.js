
var cache = [];
for(var i = 0; i < 20; i++) {
	cache.push([]);
	for(var j = 0; j < 20; j++)
		cache[i].push(0);
}

function f(x,y) {
	if(cache[x-1][y-1] != 0) {
		return cache[x-1][y-1];
	}

	if(y == 1) {
		return x+1;
	}
	if(x == 1) {
		return y+1;
	}
	var res = f(x,y-1) + f(x-1,y);

	cache[x-1][y-1] = res;
	cache[y-1][x-1] = res;
	return res;
}

console.log(f(20,20));