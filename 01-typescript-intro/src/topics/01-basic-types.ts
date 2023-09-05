// Declare a variable 'name' of type string and assign the value 'Strider' to it
const name: string = 'Strider';

// Declare a variable 'hpPoints' that can hold a number or a string and assign the value 95 to it
let hpPoints: number | string = 95;

// Declare a variable 'isAlive' of type boolean and assign the value true to it
const isAlive: boolean = true;

// Reassign the 'hpPoints' variable with the value 'Full', which is now of type string
hpPoints = 'Full';

// Log the values of 'name', 'hpPoints', and 'isAlive' to the console as an object
console.log({
  name,
  hpPoints,
  isAlive
})

// Export an empty object to indicate the end of the file (used for module systems)
export{};