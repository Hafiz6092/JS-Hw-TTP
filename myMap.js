function myMap(arr, callback) {
    let mappedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i]));
    }
    
    return mappedArray;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  let doubledNumbers = myMap(numbers, function(number) {
    return number * 2;
  });
  
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  