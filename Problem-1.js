
// arguments: 2 is the max, 3 is x, 4 is y


/* The solution is the answer to

x + 2x + 3x + 4x + 5x + 6x... + a1 // sum of the the multiples of x
+ 
y + 2y+ 3y +4y + 5y + 6y ... + a2  // sum of the multiples of y
-
xy + 2xy + 3xy + 4xy + 5xy + 6xy ... + a3 // sum of the the common multiples

where n1, n2, and n3 are the largest multiples less than n 


This is the same as 

x * (1 + 2 + 3 + ... + a1/x)
+ 
y * (1 + 2 + 3 + ... + a2/y)
-
x*y *(1 + 2 + 3 + ... + a3/(xy)

This fits summation rules!

so, 

x/2* (a1/x) * (a1/x+1) +  y/2 * (a2/y)(a2/y+1) + xy/2* (a3/xy)(a3/xy+1)

a1 = floor(n/x) * x => n1 = n  x
a2 = floor(n/y) * x => n2 = n % y
a3 = floor(n/(xy)) * x => n3 = n % (xy)

*/

var n = +(process.argv[2]);
var x = +(process.argv[3]);
var y = +(process.argv[4]);

var n1 = Math.floor((n-1) / x);
var n2 = Math.floor((n-1) / y);
var n3 = Math.floor((n-1) / (x*y));

console.log((x * (n1 * (n1 +1)) + y * (n2 * (n2 +1)) - x*y * (n3 * (n3 +1)))/2);


// using a loop instead

var sum = 0;
var i = 0;
for(; i < 1000; i++) {
	if(i%3 == 0 || i%5 == 0) {
		sum = sum + i;
	}
}
console.log(sum);