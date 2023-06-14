function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
  
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
  
    return accumulator;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  let sum = myReduce(numbers, function(acc, num) {
    return acc + num;
  }, 0);
  
  console.log(sum); // 15
//besically works as a Array sum function  