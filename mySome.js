function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return true;
      }
    }
  
    return false;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  let hasEvenNumber = mySome(numbers, function(num) {
    return num % 2 === 0;
  });
  
  console.log(hasEvenNumber); // true
  