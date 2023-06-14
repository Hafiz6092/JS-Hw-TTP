function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
  
    return false;
  }
  
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const hasBanana = myIncludes(fruits, 'banana');
  
  console.log(hasBanana); // true

