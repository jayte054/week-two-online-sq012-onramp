# Challenge 1
Anagrams are words or phrases you spell by rearranging the letters of another word or phrase.  For example, "schoolmaster" can be turned into "the classroom", below to elbow, gainly to laying, meteor to remote.

The only rule is that all the letters from the original word must be used when they’re reordered to say something entirely different.

implement a function isAnagram that returns true if two words are anagrams and return false if the word are not (also return false if no words where given)

# Examples
isAnagram("below", "elbow") to return true
isAnagram("meteor", "remote") to return true
isAnagram("hackathon", "achcthoon") to return false

# Challenge 2

A prime number is a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

Implement  a function  checkPrime(num) that returns true if a number is a prime number and false if it is not


# Challenge 3


Implement the function missingNumber(numArr) which returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false. If there is more than one missing number, the function should return the result in an array sorted in ascending order.

# Examples

missingNumber([1,2,3,4,6,7,8,9]) to return 5
missingNumber([1,2,3,4,5,6,8]) to return [7, 9]
missingNumber([1,2,3,4,5,6,7,8,9]) to return false



# Challenge 4

Implement the function replaceDivisible(x, y) which replaces all numbers in an array, x divisible by an integer, y with string “isDivisible”

# Examples
replaceDivisible([2,4,3,6,5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]
replaceDivisible([12,4,3,6,5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]

# Challenge 5

 A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

 Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

 # Examples
 isPalindrome("anna")   ==> true
 isPalindrome("walter") ==> false
 isPalindrome(12321)    ==> true
 isPalindrome(123456)   ==> false