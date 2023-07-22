//Check if an object has a property
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
  
    if('Alan' && 'Jeff' && 'Sarah' && 'Hamza'  in users){
      return true;
    }
    return false;
   
  }
  
  console.log(isEveryoneHere(users));