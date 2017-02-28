var log = function log(data) {
  "use strict";
  window.console.log(data);

}
var calculatrice = function calculatrice(){
  "use strict";
  console.log("ready")
  var btn, saisie;
  btn = document.getElementById("btn")
  saisie = document.getElementById("ma_saisie")
  log(btn);
  log(saisie);

  //btn.onclick = function click{
    //log("click 1")
//  }
function generclick() {
  log("click2");
  log(saisie.value);
  var res = add(10, 10);
  log(res);
}

function add(a, b){
  return a + b;

}
btn.onclick = generclick;
}
