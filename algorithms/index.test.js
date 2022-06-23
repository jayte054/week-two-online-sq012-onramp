const isAnagram = require('./challenge-1')
const checkPrime = require('./challenge-2')
const missingNumber = require('./challenge-3')
const replaceDivisible = require('./challenge-4')
const isPalindrome = require('./challenge-5')

describe('Challenge 1 Tests', () => {
  test('basic tests', () => {
    expect(isAnagram("india", "nidia")).toBeTruthy()
    expect(isAnagram("below", "elbow")).toBeTruthy()
    expect(isAnagram("meteor", "remote")).toBeTruthy()
    expect(isAnagram("hackathon", "achcthoon")).toBeFalsy()
    expect(isAnagram("ythc", "yatch")).toBeFalsy()
    expect(isAnagram("", "developer")).toBeFalsy()
  })
})

describe('Challenge 2 Tests', () => {
  test('basic tests', () => {
    expect(checkPrime(2)).toBeTruthy()
    expect(checkPrime(3)).toBeTruthy()
    expect(checkPrime(4)).toBeFalsy()
    expect(checkPrime(5)).toBeTruthy()
    expect(
      checkPrime(6)
    ).toBeFalsy()
    expect(checkPrime(7)).toBeTruthy()
    expect(checkPrime(8)).toBeFalsy()
  })
})

describe('Challenge 3 Tests', () => {
  test('basic tests', () => {
    expect(missingNumber([1, 2, 3, 4, 6, 7, 8, 9])).toBe(5)
    expect(missingNumber([1, 2, 3, 4, 5, 6, 8])).toStrictEqual([7, 9])
    expect(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeFalsy()
  })
})

describe('Challenge 4 Tests', () => {
  test('basic tests', () => {
    expect(replaceDivisible([2, 4, 3, 6, 5], 3)).toStrictEqual([
      2,
      4,
      'isDivisible',
      'isDivisible',
      5
    ])
    expect(replaceDivisible([12, 4, 3, 6, 5], 2)).toStrictEqual([
      'isDivisible',
      'isDivisible',
      3,
      'isDivisible',
      5
    ])
    expect(replaceDivisible([1, 2, 3, 4, 5], 1)).toStrictEqual([
      'isDivisible',
      'isDivisible',
      'isDivisible',
      'isDivisible',
      'isDivisible'
    ])
    expect(replaceDivisible([1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([
      1,
      'isDivisible',
      3,
      'isDivisible',
      5,
      'isDivisible',
      7,
      'isDivisible'
    ])
    expect(replaceDivisible([10, 100, 1000], 0)).toStrictEqual([10, 100, 1000])
  })
})


describe('Challenge 5 Tests', () => {
    test('basic tests', () => {
        expect(isPalindrome("anna")).toBeTruthy()
        expect(isPalindrome("walter")).toBeFalsy()
        expect(isPalindrome(12321)).toBeTruthy()
        expect(isPalindrome(123456)).toBeFalsy()
      })
})