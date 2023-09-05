// Declare an array 'skills' of type string and initialize it with some skills
const skills: string[] = ['Bash', 'Counter', 'Healing'];

// Define an interface 'caracter' with properties: name (string), hp (number), skills (string[]), and hometown (optional string)
interface caracter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Optional property
}

// Create an object 'strider' of type 'caracter'
const strider: caracter = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'], // Initialize with skills
}

// Add the 'hometown' property to the 'strider' object
strider.hometown = 'Riverdell';

// Log the 'strider' object as a table to the console
console.table(strider)

// Export an empty object to indicate the end of the file (used for module systems)
export{};