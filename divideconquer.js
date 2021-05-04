// Binary search is only going to work if the data is already sorted
// it takes something which is linear, and turns it into logarithmic time
// data is decreasing by half each time
// every time you hear about a sorted array you should be thinking binary search
// every time you see an array, if it's sorted, you should be thinking binary search

function linearSearch(list, item) {
    let index = -1
    // typically, if we didn't find the item, we return -1

    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i
        }
    })

    return index
}

console.log(linearSearch([2, 6, 7, 90, 104], 90))
// >> 3
