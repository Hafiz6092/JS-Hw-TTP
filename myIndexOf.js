function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
  
    return -1;
  }
  
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  
  const indexOrange = myIndexOf(fruits, 'orange');
  console.log(indexOrange); // 2
  
  const indexPear = myIndexOf(fruits, 'pear');
  console.log(indexPear); // -1
  