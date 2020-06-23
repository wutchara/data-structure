## What is the Big O of the below function? (Hint, you may want to go line by line)

``` javascript
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}
```

## Ans: 
> O(1(a) + 1(a) + n(loop) + n(function) + n(stranger) + n(a++) + 1(return))  
> O(3 + 4n)  
> O(4n) => Remove constant  
> O(n) => Drop Non-dominant terms  

___

## What is the Big O of the below function? (Hint, you may want to go line by line)

``` javascript
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}
```

## Ans:

> O(1(a) + 1(b) + 1(c) + n(loop1) + n(x) + n(y) + n(z) + n(loop2) + n(p) + n(q) + 1(whoAmI))  
> O(4 + 7n)
> O(7n) => Remove constant  
> O(n) => Drop Non-dominant terms  

___

``` javascript
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}
logAllPairsOfArray(boxes)
```

## Ans:
> O(n(loop1) * n(loop2))  
> O(n^2)  
___

``` javascript
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array, array2) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }

  for (let j = 0; j < array2.length; j++) {
      console.log(array[j])
    }
}
logAllPairsOfArray(boxes, boxes)
```

## Ans:
> O(n1(loop1) + n2(loop2))  
> O(a + b)  => Different inputs should have different variables

___


``` javascript
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {// O(n)
    console.log(number);// O(n)
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) { // O(n)
    numbers.forEach(function(secondNumber) { // O(n^2)
      console.log(firstNumber + secondNumber); // O(n^2)
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])
```

## Ans:
> O(1 + n + n + 1 + n + n^2 + n^2)  
> O(2 + 3n + 2n^2)
> O(n + n^2)
> O(n^2) => Drop Non-dominant terms

___
``` javascript
const boxes1 = ['a', 'b', 'c', 'd', 'e']
const boxes2 = ['1', '2', '3', '4', '5']
const logAllPairsOfArray1 = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {  // O(a)
    for (let j = 0; j < array2.length; j++) {  // O(b)
      console.log(array1[i], array2[j])
    }
  }
}
logAllPairsOfArray1(boxes1, boxes2)
// Rule 3: big O(a + b)
```
___

``` javascript
void nFacRuntimeFunc(int n) {
  for(int i=0; i<n; i++) {
    nFacRuntimeFunc(n-1);
  }
}
```
## Ans: O(n!)
___
> ## Note  
> O(5*2^n + 1000n^100)  
> O(1000n^100) => it is the highest possible value which the code reaches