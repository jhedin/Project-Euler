
var list = [];
for(var i = 0; i <100; i++) {
	list.push(i + 1);
}

var squares = list.map(function(x){return x*x});
var sumOfSquares = squares.reduce(function(a, b) {return a + b;});
var SquareOfSums = list.reduce(function(a, b) {return a + b;});
var SquareOfSums = SquareOfSums * SquareOfSums;

console.log(SquareOfSums - sumOfSquares);