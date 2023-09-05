// Define an interface 'AudioPlayer' with properties: audioVolume (number), songDuration (number), 
// song (string), and details (of type 'Details')
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

// Define an interface 'Details' for song details
interface Details {
    author: string;
    year: number;
}

// Create an object 'audioPlayer' of type 'AudioPlayer'
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

// Define a new song
const song = 'New Song';

// Destructure properties from 'audioPlayer' and rename them
const { song: anotherSong, songDuration: duration, details } = audioPlayer;

// Destructure the 'author' property from 'details'
const { author } = details;

// console.log('Song: ', anotherSong );
// console.log('Duration: ', duration );
// console.log('Author: ', audioPlayer.details.author );
// console.log('Author: ', author );

// Log the values to the console
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', audioPlayer.details.author);
console.log('Author: ', author);

// Destructure an array and set a default value
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

// Log the 'trunks' variable
console.error('Personaje 3:', trunks);

// Export an empty object to indicate the end of the file (used for module systems)
export {};