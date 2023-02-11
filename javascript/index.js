let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = moment().format(
  "hh:mm:ss [<small>]A[</small>]"
);

let amsterdamElement = document.querySelector("#amsterdam");
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");

amsterdamDateElement.innerHTML = moment().format("MMMM Do YYYY");
amsterdamTimeElement.innerHTML = moment().format(
  "hh:mm:ss [<small>]A[</small>]"
);

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");

tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = moment().format("hh:mm:ss [<small>]A[</small>]");
