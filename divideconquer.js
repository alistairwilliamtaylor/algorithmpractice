// Binary search is only going to work if the data is already sorted
// it takes something which is linear, and turns it into logarithmic time
// data is decreasing by half each time
// every time you hear about a sorted array you should be thinking binary search
// every time you see an array, you should be checking to see if it is sorted, and if it is you should be thinking binary search

// BELOW IS A SIMPLE LINEAR SEARCH

function linearSearch(list, item) {
    let index = -1
    // typically, if we didn't find the item, we return -1

    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i
            // this will always return the last one if there's a duplicate
        }
    })

    return index
}

// BUT HERE IS THE MUCH MORE TIME EFFICIENT BINARY SEARCH (HALVING LIST EACH TIME) 


function binarySearch(list, item) {
    let min = 0;
    let max = list.length - 1;
    let guess = null;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (list[guess] === item) {
            return guess;
        } else {
            if (list[guess] < item) {
                min = guess + 1
                // i.e. second half of list
            } else {
                max = guess - 1
                // i.e. first half of list
            }
        }
    }

    return -1

}

// console.log(binarySearch([3, 5, 8, 12, 52, 64, 67, 89, 119, 209, 306], 89))


// BELOW IS A BUBBLE SORT (QUADRATIC TIME)

function bubbleSort(list) {

    let sortedList = [...list]

    for (let limit = list.length - 1; limit >= 0; limit--) {
        for (let i = 0; i <= limit; i++) {
            if (sortedList[i] > sortedList[i+1]) {
                let greaterVal = sortedList[i]
                let lesserVal = sortedList[i+1]
                sortedList[i] = lesserVal
                sortedList[i+1] = greaterVal
            }
        }
    }

    return sortedList

}

// const list = [7, 16, 5, 54, 3, 9, 1]

// console.log(bubbleSort(list))
// console.log(bubbleSort(list))
// console.log(bubbleSort(list))

// NEXT UP, MERGE SORT - NLOGN TIME