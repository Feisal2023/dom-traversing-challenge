const textArea = document.getElementById('textArea');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const box5 = document.querySelector('.box-5');
const box6 = document.querySelector('.box-6');
const box7 = document.querySelector('.box-7');
const box8 = document.querySelector('.box-8');
const box9 = document.querySelector('.box-9');
const box10 = document.querySelector('.box-10');
const box11= document.querySelector('.box-11');
const box12 = document.querySelector('.box-12');
const fontSize = document.getElementById('fontSize');
const borderRadius = document.getElementById('borderRadius');
const fontWeight = document.getElementById('fontWeight');
const fontFamily = document.getElementById('fontFamily');
const textColors = document.getElementById('textColors');


const bgBlue = () => {
  textArea.style.background = 'blue';
}
const bgRed = () => {
  textArea.style.background = 'red';
}

const bgYellow = () => {
  textArea.style.background = 'yellow';
}

const bgGreen = () => {
  textArea.style.background = 'green';
}
const bgPeru = () => {
  textArea.style.background = 'peru';
}
const bgPurple = () => {
  textArea.style.background = 'purple';
}
const bgPink = () => {
  textArea.style.background = 'pink';
}
const bgViolet = () => {
  textArea.style.background = 'violet';
}
const bgCadetBlue = () => {
  textArea.style.background = 'cadetblue';
}
const bgCrimson = () => {
  textArea.style.background = 'crimson';
}
const bgCyan = () => {
  textArea.style.background = 'cyan';
}
const bgCoral = () => {
  textArea.style.background = 'coral';
}
const fontSizing = () => {
  textArea.style.fontSize = fontSize.value + 'px';
}
const borderSizing = () => {
  textArea.style.borderRadius = borderRadius.value + 'px';
}
const fontWeighting = () => {
  textArea.style.fontWeight = fontWeight.value;
}
const familyFont = () => {
  textArea.style.fontFamily = fontFamily.value;
}
const textColoring = () => {
  textArea.style.color = textColors.value;
}
box1.addEventListener('click', bgBlue);
box2.addEventListener('click', bgRed);
box3.addEventListener('click', bgYellow);
box4.addEventListener('click', bgGreen);
box5.addEventListener('click', bgPeru);
box6.addEventListener('click', bgPurple);
box7.addEventListener('click', bgPink);
box8.addEventListener('click', bgViolet);
box9.addEventListener('click', bgCadetBlue);
box10.addEventListener('click', bgCrimson);
box11.addEventListener('click', bgCyan);
box12.addEventListener('click', bgCoral);
fontSize.addEventListener('input', fontSizing);
borderRadius.addEventListener('input',  borderSizing);
fontWeight.addEventListener('change', fontWeighting);
fontFamily.addEventListener('change', familyFont);
textColors.addEventListener('change', textColoring);