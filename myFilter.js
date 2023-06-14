function myFilter(arr, callback) {
    let filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        filteredArray.push(arr[i]);
      }
    }
  
    return filteredArray;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  let evenNumbers = myFilter(numbers, function(number) {
    return number % 2 === 0;
  });
  
  console.log(evenNumbers); // [2, 4]