function jsProjetos() {
    document.querySelector(".aparecer-js").classList.toggle("on");
    document.querySelector(".aparecer-css").classList.remove("on");
    document.querySelector(".aparecer-php").classList.remove("on");
}

function cssProjetos() {
    document.querySelector(".aparecer-css").classList.toggle("on");
    document.querySelector(".aparecer-php").classList.remove("on");
    document.querySelector(".aparecer-js").classList.remove("on");
}

function phpProjetos() {
    document.querySelector(".aparecer-php").classList.toggle("on");
    document.querySelector(".aparecer-css").classList.remove("on");
    document.querySelector(".aparecer-js").classList.remove("on");
  }