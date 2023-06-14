function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
    return arr.length;
  }
  
  let fruits = ['apple', 'banana'];
  let length = myPush(fruits, 'orange');
  console.log(fruits); // ['apple', 'banana', 'orange']
  console.log(length); // 3
  