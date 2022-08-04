// --------
// Task 1.1
// --------

function fruitSelector(fruitCode) {
  if (fruitCode < 10) {
    return 'Banana'
  } else if (fruitCode < 20 && fruitCode >= 10) {
    return 'Apple'
  } else if (fruitCode >= 20) {
    return 'Orange'
  }
}

// ---------
// Task 1.2a
// ---------

function randomColor() {
  let random = Math.floor(Math.random() * 4)

  // If you used a switch/case here instead of ifs,
  // that's completely fine
  if (random === 0) {
    return 'green'
  } else if (random === 1) {
    return 'yellow'
  } else if (random === 2) {
    return 'red'
  } else if (random === 3) {
    return 'blue'
  }
}

// ---------
// Task 1.2b
// ---------

function randomColor() {
  let random = Math.floor(Math.random() * 6)

  // If you used a switch/case here instead of ifs,
  // that's completely fine
  if (random === 0) {
    return 'green'
  } else if (random === 1) {
    return 'yellow'
  } else if (random === 2) {
    return 'red'
  } else if (random === 3) {
    return 'blue'
  } else if (random === 4) {
    return 'purple'
  } else if (random === 5) {
    return 'pink'
  }
}

// --------
// Task 1.3
// --------

/**
 * Math.random() returns a random number between 0 and 1 (decimal)
 * By multiplying it with 6 (like in 1.2b), we get a random decimal number between
 * 0 and 6. But with a lot of decimals. So we use Math.floor() to round down to the
 * nearest integer (no decimals)
 */

 // Example - Dice throw with n dices

 function diceThrow(noOfThrows) {
   let diceSum = 0

   for (let i = 0; i < noOfThrows; i++) {
     // Notice how I add 1 to the random number to get a number between
     // 1 and 6, instead of 0 and 5.
     diceSum += Math.floor(Math.random() * 6) + 1
   }

   return diceSum
 }