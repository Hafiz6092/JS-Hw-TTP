function grabKeys(obj) {
    let keys = [];
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
  
    return keys;
  }
  
  const student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
  };
  
  const keys = grabKeys(student);
  console.log(keys); // ['firstname', 'lastname', 'age', 'gender']
  