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
// And a written explanation of your solution
