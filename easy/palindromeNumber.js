//Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

//most basic solution
var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('');
    let string = x.toString();
    
    if (reversed === string) {
        return true;
    } else {
        return false;
    }
};

let x = -121;
let y = 121;
console.log(isPalindrome(x));
console.log(isPalindrome(y));