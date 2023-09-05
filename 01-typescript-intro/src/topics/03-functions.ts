// Define a function 'addNumbers' that takes two numbers 'a' and 'b' and returns their sum as a number
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Define an arrow function 'addNumbersArrow' that takes two numbers 'a' and 'b' and returns their sum as a string
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

// Define a function 'multiply' that takes 'firstNumber' as a number, 'secondNumber' as an optional number 
// (default is undefined), and 'base' as a number with a default value of 2
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({ result, result2, multiplyResult })

// Define an interface 'Character' with properties: name (string), hp (number), and showHp 
// (a function that takes no arguments and returns void)
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

// Define a function 'healCharacter' that takes a 'character' of type 'Character' and 
// an 'amount' as a number to increase the character's hp
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

// Create an object 'strider' of type 'Character'
const strider: Character = {
    name: 'Strider',
    hp: 50,
    // Define the 'showHp' method for 'strider'
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

// Heal 'strider' by 10 and 50 points
healCharacter(strider, 10);
healCharacter(strider, 50);

// Show 'strider's hp using the 'showHp' method
strider.showHp();

// Export an empty object to indicate the end of the file (used for module systems)
export {};