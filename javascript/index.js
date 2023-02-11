let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesMoment = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesMoment.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesMoment.format(
  "hh:mm:ss [<small>]A[</small>]"
);

let amsterdamElement = document.querySelector("#amsterdam");
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
let amsterdamMoment = moment().tz("Europe/Amsterdam");

amsterdamDateElement.innerHTML = amsterdamMoment.format("MMMM Do YYYY");
amsterdamTimeElement.innerHTML = amsterdamMoment.format(
  "hh:mm:ss [<small>]A[</small>]"
);

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoMoment = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoMoment.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoMoment.format(
  "hh:mm:ss [<small>]A[</small>]"
);
