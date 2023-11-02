"use strict"

function structure() {
    let cache = {};
    return function fibonacci (a) {
        if (a in cache) {
            return cache[a];
        } else {
            cache[a] = a;
            if (a>1) {
                let n = fibonacci(a-1)+fibonacci(a-2);
                cache[a] = n;
                return n;
            } else {
            return 1;
            }
        }
    }
}

//making a function that will count fibonacci nums
function fibonacci(n) {
  if (n==1 || n==0) {
    return n;
  }
  //function for real count fibonacci nums inside other function
  //because we need constructor
  function realConstructor() {
    return function findFibonacci(a) {
      if (a in cache) {
        return cache[a];
      } else {
        cache[a] = a;
        if (a>1) {
            let n = findFibonacci(a-1)+findFibonacci(a-2);            
            cache[a] = n;
            return n;
        } else {
        return 1;
        }
    }
    }
  }
  let cache = {};

  let fibonacciNum = realConstructor();
  return fibonacciNum(n-1);
}

console.log(fibonacci(44));
console.log(fibonacci.name);