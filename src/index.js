import BouncingPenguin from './game';
import './styles/main.css';

//check to see if it's connected
// alert('connected!')
const canvas = document.getElementById('penguin-game');
new BouncingPenguin(canvas);

