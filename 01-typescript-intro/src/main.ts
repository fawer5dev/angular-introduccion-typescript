import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './topics/03-functions.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola Mundo`;

console.log('Hola Mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)