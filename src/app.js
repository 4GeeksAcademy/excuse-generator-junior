import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let elementExcuse = document.getElementById("excuse");

  let who = ["Mi perro", "Mi gato", "Mi hermana", "Una paloma"];
  let action = ["comio", "daño", "escondio", "choco"];
  let what = ["mis notas", "mi telefono ", "la moto "];
  let when = ["despues del trabajo","cuando estaba comiendo","cuando sali","mientras estaba en el baño","durante la practica",
  ];

  function setTexts() {
    elementExcuse.innerText = aggExcuse(who, action, what, when) + "...";
  }
 
  setTexts();
};
function randomText(array){
  let text = Math.floor(Math.random() * array.length);
  return text;
}


function aggExcuse(who, action, what, when) {
  let excuseAggArray = [];

  excuseAggArray.push(who[randomText(who)]);
  excuseAggArray.push(action[randomText(action)]);
  excuseAggArray.push(what[randomText(what)]);
  excuseAggArray.push(when[randomText(when)]);
  console.log(excuseAggArray);
  return excuseAggArray. join(" ");
}
