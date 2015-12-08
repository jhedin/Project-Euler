
// checks for a proper solution
function palindrome(x) {
	var str = x.toString();

	for(var i = 0; i < str.length; i++) {
		if(str[i] != str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
}

var palindromes = []; 
for(i = 999; i > 100; i--) {
	for(j = i; j > 100; j--) {
		if(palindrome(i*j))
			palindromes.push(i*j);
	}
}

palindromes.sort(function(a,b){return b - a;});

console.log(palindromes[0]);

