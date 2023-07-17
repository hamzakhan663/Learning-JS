//Musical Album COllection
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    },
    2023:{
       artist: 'Mhistersax'
    }
  };
  
  // Create function
  function updateRecords(records, id, prop, value) {
    // Delete property if property value is empty
    if(value === ""){
      delete records[id][prop];
    }
    // Assign value to album property if property is not equal to tracks and if value is not empty
    else if(prop!=="tracks" && value!==""){
      records[id][prop]=value;
    }
    // Add value to tracks property if property is tracks and if value is not empty
    else if (prop === "tracks" && value !== "") {
    // Create a tracks property if a tracks property is not found within the album
      if (records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [];
      }
    // Add value ad the last item in the album's tracks array
      records[id][prop].push(value);
    }
    
    return records;
  }
    // Display modified Record Collection
  console.log(updateRecords(recordCollection, 2023, 'tracks', 'Jagaban'));