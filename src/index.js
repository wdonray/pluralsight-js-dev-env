import './global.css';
import numeral from 'numeral';

const cost = 1000;

const value = numeral(cost).format('$0,0.00');
console.log(`I would pay ${value} for this experience.`);
