Array.prototype.myFilter = function(callback) {
    const newArray = [];
    
  for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
      }
    }
    
    return newArray;
  };