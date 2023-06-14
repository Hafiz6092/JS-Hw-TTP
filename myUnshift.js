function myLastIndexOf(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target) {
        return i;
      }
    }
  
    return -1;
  }
  
  const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];
  
  const lastIndexDog = myLastIndexOf(animals, 'dog');
  console.log(lastIndexDog); // 3
  
  const lastIndexCow = myLastIndexOf(animals, 'cow');
  console.log(lastIndexCow); // -1
  