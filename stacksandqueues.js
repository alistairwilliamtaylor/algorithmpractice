// below is an exercise that happened to pop up on codewars while i was learning about queues and stacks. I looped a lot, moving customers out of the queue and to the till and decrementing 

function queueTime(customers, n) {
  
    let atTills = []
    let elapsedMins = 0
    
    fillTills()
    
    while (atTills.length > 0) {
      atTills = atTills.map(mins => mins - 1)
                       .filter(mins => mins !== 0)
      elapsedMins ++
      fillTills()
    }
    
    
    function fillTills() {
      while (customers[0] !== undefined && atTills.length < n) {
              atTills.push(customers.shift())       
      }    
    }
    
    return elapsedMins
}

// console.log(queueTime([7,5,9,6,2,5,4,6,2,4,2,4,2], 3));

// found out that this is an excellent opportunity to use of Math.min() and Math.max() with spread syntax for a more concise solution:

function improvedQueueTime(customers, n) {
    let tills = Array(n).fill(0);
    
    customers.forEach((customer) => {
      let nextTill = tills.indexOf(Math.min(...tills))
      tills[nextTill] += customer;
    });
  
    return Math.max(...tills);
  }