function findElement(arr, func) {
    //Find fuction finds the first element that matches the given function
    return arr.find(func);
    }
    
    console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));