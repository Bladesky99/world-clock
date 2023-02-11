function updateTime() {
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
}

function updateCity(event) {
  let timeZone = event.target.value;
  let cityTime = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="row">
            <div class="col-6">
              <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
              </div>
            </div>
            <div class="col-6">
              <div class="time">${cityTime.format(
                "hh:mm:ss"
              )} <small>${cityTime.format("A")} </small></div>
            </div>
          </div>`;
}

let dropdownMenu = document.querySelector("#dropdownMenu");
dropdownMenu.addEventListener("change", updateCity);

setInterval(updateTime, 1000);
