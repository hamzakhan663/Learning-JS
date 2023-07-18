// Profile Contacts List
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
      dislikes: ["Pasta"]
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
      dislikes: ["Voldermort"]
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
      dislikes: ["Emotions"]
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
      dislikes: ["Roaches"]
    },
    {
      firstName: "Eren",
      lastName: "Yeager",
      number: "Nil",
      likes: ["Mikasa", "Freedom", "Titan"],
      dislikes: ["Humanity"]
      },
  ];

  function lookUpProfile(name, prop) {
  // Loop through the contacts list
    for(let i = 0; i < contacts.length; i++){

  // Use conditionals to determine if said name is in the contacts list.
    if(contacts[i].firstName === name){
        
  // Return value of the property if the name and the property are within the list. If per adventure the property is not found within the contact list but the name is, Return string "No such property"
  return contacts[i][prop] || "No such property";
    }
}
  // Return this string if name is not in the contact list
    return "No such contact";
    
  }
  
  // Display Function
  console.log(lookUpProfile("Eren", "dislikes"));