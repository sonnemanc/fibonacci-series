function fibonacci(num) {
  // type your code here
  let arr = [0,1]
  let count = arr.length -1
  while (count < num) {
    let newValue = arr[arr.length - 2] + arr[arr.length - 1];
    arr.push(newValue);
    count += 1;
  }
  console.log(arr[arr.length - 1])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

  //declare an array with the first two values
  //set a counter equal to the starting length of the array
  //set a while loop to iterate until the count is no longer smaller than the provided num
  //in loop the last two values in the array will be summed and that sum will be added to the end of the array.
  //before the next iteration the counter is shifted up one increment until it reaches the provided number.


// And a written explanation of your solution
