// HERE'S WHAT I WROTE FOR MAKING CHANGE WITH LIMITED DENOMINATIONS

function makeChange(denominations, total) {

    denominations.sort((a, b) => b - a)
    // this makes sure that no matter what order the denominations are provided, you work from the largest first, down to the smallest. you don't want to be breaking down $100 into $1 notes to start off with if you have the option of $50 notes

    let noteCount = 0
    let usedNotes = []
    

    denominations.forEach(denomination => {
        if (total > 0 && Math.floor(total / denomination) > 0) {
            usedNotes.push(denomination)
            noteCount += Math.floor(total / denomination)
            total = total % denomination
        }
    })

    return `${noteCount} (${usedNotes.join(', ')})`
}

console.log(makeChange([1, 6, 10], 12));

// HERE'S WHAT THE COURSE SUGGESTED - VERY SIMILAR IDEA, BUT RATHER THAN USING MODULUS AND DIVISION, JUST LOOP OVER AND OVER UNTIL total IS LESS THAN DENOMINATION

function courseMakeChange(denominations, total) {
 
    denominations.sort((a, b) => b - a)

    let coinTotal = 0;
    
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++
        } else {
            i++
        }
    }

    return coinTotal
}

// ANYHOW, BOTH OF THEM FAIL IN EDGE CASES LIKE $10, $6, $1 denominations, for $12, when you'd want to use two $6 bills, rather than a $10 bill and two $1 bills. So we need to brute force it. We'll do that by using recursion:

const denominations = [1, 6, 10]

function recursionMakeChange(total) {
    
    if (total === 0) return 0;
    
    let minBills = 0
    denominations.forEach(denomination => {
        if (total - denomination >= 0) {
            let currentMinBills = recursionMakeChange(total - denomination);
            if (minBills === undefined || currentMinBills < minBills) {
                // this is really where the money is. as you move up from a really isolated branch with lots of $1 bills subtracting one after another, you'll just keep having undefined minBills, and so will keep setting it to your current bills count. HOWEVER, once you get back to a fork in the road, the next iteration of the forEach loop will be comparing it to other potential solutions (hence the OR statement here) and that's when you do the important job of comparing branches and overriding if better, or discarding if worse.
                minBills = currentMinBills
            }
        }
    });
   
    return minBills + 1

}

// this is EXPONENTIAL time complexity - so again, we are brought back to the old thing that even though brute force isn't perfect because there are edge cases and exceptions and you're just using a good rule of thumb, it might just be good enough, and at least it isn't exponential time.



// BELOW IS WITH CACHING OR "DYNAMIC PROGRAMMING". IT'S NOT AT ALL BEST PRACTICES BECAUSE THE CACHE IS GLOBAL SCOPE, IT SHOULD BE MEMOIZED.

const cache = {}
const denominations = [1, 6, 10]

function cachedRecursionMakeChange(total) {
    
    if (cache[total]) return (cache[total])
    // just add this

    if (total === 0) return 0;
    
    let minBills = 0

    denominations.forEach(denomination => {
        if (total - denomination >= 0) {
            let currentMinBills = cachedRecursionMakeChange(total - denomination);
            if (minBills === undefined || currentMinBills < minBills) {
                minBills = currentMinBills
            }
        }
    });
   
    cache[total] = minBills + 1;
    return cache[total]
    // and also do this at the end so it's always added to cache

}