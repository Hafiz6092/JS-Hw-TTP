function arrayToList(arr) {
    let list = null;
  
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
  
    return list;
  }
  
  function listToArray(list) {
    let arr = [];
  
    while (list !== null) {
      arr.push(list.value);
      list = list.rest;
    }
  
    return arr;
  }
  
  function prepend(ele, list) {
    return { value: ele, rest: list };
  }
  
  function nth(list, index) {
    if (list === null) {
      return undefined;
    } else if (index === 0) {
      return list.value;
    } else {
      return nth(list.rest, index - 1);
    }
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
  