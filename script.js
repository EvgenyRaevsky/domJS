// Task 1
const container = document.querySelector('.container');

const N = 100;
const WIDTH = 35;
const HEIGHT = 35;

for (let i = 0; i < N; i++) {
    const randNum = Math.floor(Math.random() * 101);
    const cDiv = document.createElement('div');
    cDiv.style.width = `${WIDTH}px`;
    cDiv.style.height = `${HEIGHT}px`;
    if (randNum > 70) {
        cDiv.style.backgroundColor = 'red'
    } else randNum < 31 ? cDiv.style.backgroundColor = 'green' : cDiv.style.backgroundColor = 'white';
    cDiv.innerText = randNum;
    container.append(cDiv);
}

// Task 2
const receptacle = document.querySelector('.receptacle');
const rDiv =  document.createElement('div');
rDiv.style.width = '50%';
rDiv.style.height = '40%';

const getColor = () => {
    return Math.floor(Math.random() * 256);
}

const RGB = `${getColor()}, ${getColor()}, ${getColor()}`;
rDiv.style.backgroundColor = `rgb(${RGB})`;

const letter = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

const more = (el) => {
    return el > 9 ? letter[el] : el; 
}

let sum = 0;

const rgbInHex = () => {
    let arrRGB = RGB.split(',');
    arrRGB = arrRGB.map(el => {
        sum += +el;
        return `${more(Math.floor(+el / 16))}${more(+el - Math.floor(+el / 16) * 16)}`;
    })
    return `#${arrRGB.join('')}`;
}

const HEX = rgbInHex();
sum > 765 / 2 ? rDiv.style.color = 'black' : rDiv.style.color = 'white';

const divRGB = document.createElement('div');
divRGB.innerText = `RGB (${RGB})`;
const divHEX = divRGB.cloneNode();
divHEX.innerText = `HEX (${HEX})`;
rDiv.append(divRGB, divHEX);
receptacle.append(rDiv) ;

