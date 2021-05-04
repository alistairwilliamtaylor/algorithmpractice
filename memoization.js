// --------------------------
// THIS IS WITH GLOBAL SCOPE

const cache = {};

const times10 = (n) => {
    return (n * 10)
} 

const memoTimes10 = (n) => {
    if (n in cache) {
        return cache[n]
    } else {
        let result = times10(n);
        cache[n] = result;
        return result
    }
}

// ---------------------
// BELOW IS WITH CLOSURE

const memoizedClosureTimes10 = () => {
    const cache = {}
    return (n) => {
        if (n in cache) {
            return cache[n]
        } else {
            let result = times10(n);
            cache[n] = result;
            return result
        }
    }
}

// notice that it is a function that returns a function

const memoClosureTimes10 = memoizedClosureTimes10()

// now we have assigned the function that it returned to 'memoClosureTimes10'
// so now when we call

memoClosureTimes10(9)
memoClosureTimes10(9)

// it basically is just going to run that function that is contained within the one above (everything but the cache initialization). That was basically just making a private room. The vast bulk of it is just the function, which we passed out and gave a different name. That private room is the parent scope. Better than using the global scope


// --------------------------
// HAS LOTS OF GENERIC POWER

const memoizedClosureTimesM = (m) => {
    let cache = {}
    return (n) => {
        if (n in cache) {
            return cache[n]
        } else {
            let result = n * m;
            cache[n] = result;
            return result
        }
    }
}

const memeClosureTimes8 = memoizedClosureTimesM(8)
const memeClosureTimes12 = memoizedClosureTimesM(12)
const memeClosureTimes152 = memoizedClosureTimesM(152)