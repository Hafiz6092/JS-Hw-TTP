function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        return false;
      }
    }
  
    return true;
  }
  
  let numbers = [2, 4, 6, 8, 10];
  
  let allNumbersEven = myEvery(numbers, function(num) {
    return num % 2 === 0;
  });
  
  console.log(allNumbersEven); // true
 
//same MySome but only the return statement are switched