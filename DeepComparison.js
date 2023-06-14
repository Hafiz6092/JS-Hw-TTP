function deepEqual(val1, val2) {
    // If the values are strictly equal, they are the same value
    if (val1 === val2) {
      return true;
    }
  
    // If either value is null or not an object, they are not equal
    if (val1 === null || typeof val1 !== "object" ||
        val2 === null || typeof val2 !== "object") {
      return false;
    }
  
    // Get the keys of both objects
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);
  
    // If the number of properties is different, they are not equal
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Recursively compare the properties of the objects
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  
  console.log(deepEqual(obj, obj));
  // → true
  
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
  