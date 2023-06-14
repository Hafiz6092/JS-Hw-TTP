function reverseArray(arr) {
    let reversed = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
  
    return reversed;
  }
  
  function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
      left++;
      right--;
    }
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"]
  
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  