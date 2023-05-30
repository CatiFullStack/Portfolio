// POP-UP 
let popUpLuaBotao = document.querySelector(".btn-lua")
let popUpLua = document.querySelector(".pop-up-lua");

function btnLua() {
  document.querySelector(".pop-up-lua").classList.toggle("on");
  document.querySelector(".pop-up-terra").classList.remove("on");
  document.querySelector(".pop-up-sol").classList.remove("on");
}

function btnTerra() {
  document.querySelector(".pop-up-terra").classList.toggle("on");
  document.querySelector(".pop-up-lua").classList.remove("on");
  document.querySelector(".pop-up-sol").classList.remove("on");
}

function btnSol() {
  document.querySelector(".pop-up-sol").classList.toggle("on");
  document.querySelector(".pop-up-terra").classList.remove("on");
  document.querySelector(".pop-up-lua").classList.remove("on");
}


//alert(window.screen.width)