var tracker = 0;
var callMe = function() {
    tracker++;
    if (tracker === 3) {
        return 'loops!';
    }
    return callMe();
}

const loopNtimes = (n) => {
    console.log('n ===', n);
    if (n <= 1) {
        return 'complete'
    }
    return loopNtimes(n-1)
}

// console.log(loopNtimes(3))

const computeFactorial = (num) => {
    if(num === 1) {
        console.log('hitting the base case');
        return 1;
    } else {
        console.log(`returning ${num} * computeFactorial(${num - 1})`);
        return num * computeFactorial(num - 1);
    }
}

// console.log(computeFactorial(5))

// WRAPPER FUNCTIONS!!! NOTICE THAT THE TWO BELOW ARE EXACTLY THE SAME

function wrapperFnLoop(start, end) {
    function recurse(i) {
        console.log(`looping from ${start} to ${end}`);
        if (i < end) {
            recurse(i+1)
        }
    }
    recurse(start)
}

function memoFnLoop(start, end) {
    if (start < end) {
        memoFnLoop(start + 1, end)
    }
}

// now we're going to join an array of strings together, always including string specified in the join

function joinElements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]

        if (index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index+1, resultSoFar + joinString)
        }
    }

    return recurse(0, '')
}

// the function below is my first ever succesful recursive function
// it doesn't do a whole lot though, just 43618 > 4 + 3 + 6 + 1 + 8 = 22
// so it's just a reduce... but written as a recursive function!

function digital_root(n) {
  
    let splitDigits = n.toString().split('')
    
    function recurse(digits, runningTotal) {
      if (digits.length > 1) {
        runningTotal += Number(digits[0])
        digits.splice(0,1)
        return recurse(digits, runningTotal) 
      } else {
        runningTotal += Number(digits[0])
        return runningTotal
      } 
    }
    
    return recurse(splitDigits, 0)
  
}

// and below here it does the full job of continuing to do it recursively

function digital_root(n) {

    while (String(n).length > 1) {
        n = splitAndAdd(n)
    }
  
    function splitAndAdd(number) {
        
        let splitDigits = number.toString().split('')
        
        function recurse(digits, runningTotal) {
          if (digits.length > 1) {
            runningTotal += Number(digits[0])
            digits.splice(0,1)
            return recurse(digits, runningTotal) 
          } else {
            runningTotal += Number(digits[0])
            return runningTotal
          } 
        }
        
        return recurse(splitDigits, 0)
      
    }

    return n

}

// but i wrote this solution much much quicker and it's way more succinct. haha

function digital_root(n) {

    while (String(n).length > 1) {
        n.toString().split('').reduce((total, char) => total += Number(char), 0)
    }

    return n

}


// let's write out a factorial function ourselves:

function factorialize() {

    // this never resets as long as the overall program runs
    const cache = {}

    return function memofacto(n) {
        console.log(cache)

        // these reset every time that a factorial is called
        let runningTotal = 1
        
        function recurse(num) {
            if (num > 1) {
                if (cache[num]) {
                    console.log('in the cache')
                    runningTotal = runningTotal * cache[num]
                    cache[n] = runningTotal
                    return runningTotal
                } else {
                    console.log('normal process')
                    runningTotal = runningTotal * num
                    return recurse(num - 1)
                }
            } else {
                cache[n] = runningTotal
                return runningTotal
            }
        }

        return recurse(n)
    }

}

let memoizedFactorializer = factorialize()

console.log(memoizedFactorializer(7))
console.log(memoizedFactorializer(7))
console.log(memoizedFactorializer(7))
console.log(memoizedFactorializer(7))
console.log(memoizedFactorializer(8))
console.log(memoizedFactorializer(8))
console.log(memoizedFactorializer(8))


// function factorialize(n) {
    
//     let runningTotal = 1
    
//     function recurse(n) {
//         if (n > 1) {
//             runningTotal = runningTotal * n
//             return recurse(n - 1)
//         } else {
//             return runningTotal
//         }
//     }
    
//     return recurse(n)
    
// }

// console.log(factorialize(5))
// console.log(factorialize(5))
// console.log(factorialize(5))
