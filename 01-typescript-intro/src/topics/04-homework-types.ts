// Define an interface 'SuperHero' with properties: name (string), age (number), address (of type 'Address'), 
// and showAddress (a function that returns a formatted address string)
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

// Define an interface 'Address' for the address details
interface Address {
    street: string;
    country: string;
    city: string;
}

// Create an object 'superHeroe' of type 'SuperHero'
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    // Define the 'showAddress' method for 'superHeroe'
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

// Call the 'showAddress' method of 'superHeroe' and store the result in 'address'
const address = superHeroe.showAddress();

// Log the 'address' to the console
console.log(address);

// Export an empty object to indicate the end of the file (used for module systems)
export {};