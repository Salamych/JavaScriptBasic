import Person from "./person";
import './css/style.css';
import pengvins from './img/Penguins.jpg';

let elena = new Person('Elena', 19, 'Russia');

console.log(elena);

document.querySelector('.img img').src = pengvins;