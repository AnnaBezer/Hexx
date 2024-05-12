let colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];
let clickMeButton = document.querySelector(".click-me-button");

let container = document.querySelector(".container");
let containerTitleColor = document.querySelector(".container-title-color");
let resetButton = document.querySelector(".reset-button");
let number = document.querySelector(".number");
 
let i= 0;
let changeColor =() => {
  // varianat 1 ;
  // i++
//   if ( i === 5){
//     i = 0
//   }
// container.style.backgroundColor = colors[i];
// varianta 2 
  // if ( i < 4){
  //   i ++;
  // } else{
  //   i=0;
  // }

  // sau 
  i++;
  if( i=== 5 ){
    i= 0;
  }
container.style.backgroundColor = colors[i];
containerTitleColor.innerText = colors[i];
containerTitleColor.style.color = colors[i];

};
let x = 0;
let inccreaseNumber = () => {
  x += 1 ; 
  number.innerText = x; 
};

let reset = ()=> {
  i= 0;
container.style.backgroundColor = colors[i];
containerTitleColor.innerText = colors[i];
containerTitleColor.style.color = colors[i];
}


clickMeButton.addEventListener("click", changeColor);
clickMeButton.addEventListener("click", inccreaseNumber);
resetButton.addEventListener("click", reset);