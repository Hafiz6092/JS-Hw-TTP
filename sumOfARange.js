function range(start, end, step = 1){
    let arr = [];

    if(step > 0){
        for(let i = start; i <= end; i +=step){
            arr.push(i);
        }
    }else{
        for(let i = start; i >= end; i +=step){
            arr.push(i);
        }
    }
    return arr;
}
// function range(start, end) {
//     let arr = [];
  
//     for (let i = start; i <= end; i++) {
//       arr.push(i);
//     }
  
//     return arr;
//   }
function sum(numbers){
    let sum = 0;
    for(number of numbers){
        sum += number;
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55