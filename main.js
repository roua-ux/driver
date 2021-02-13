const namein = document.querySelector("#inputname");
const agein = document.querySelector("#inputage");
const genderin = document.querySelector("#inputgender");

const nameout = document.querySelector("#Rname");
const ageout = document.querySelector("#age");
const lastnameout = document.querySelector("#Rlastname");
const genderout = document.querySelector("#rgender");
const submit = document.querySelector("#submitbtn");
const licenseagein = document.querySelector("#licenseagein");
const resultout = document.querySelector("#result");
const lincesageout = document.querySelector("#lincesageout");

const test = () => {
  submit.disabled = !(namein.value && agein.value && licenseagein.value);
};
test();

function styleResult(){
  if (agein.value >= 18 && agein.value <75 ) {
    if (licenseagein.value >= 2){
      resultout.style.textDecoration = "Underline";
    }else {
      resultout.style.textDecoration = "none";
    }
    
  }
}

function result() {
  nameout.innerText = namein.value;
  ageout.innerText = ageout.value;
  lincesageout.innerText = alincesageout.value;
  genderout.innerText = genderout.value;
  resultout.innerHTML =
    agein.Value > 18 && agein.Value < 75
      ? licenseagein.Value >= 2
        ? genderin.Value === "femmale"
          ? "femmale expert"
          : "male expert"
        : genderin.Value === "femmale"
        ? "femmale driver "
        : "male driver"
      : "not driver ";
}
namein.addEventListener("input", test);
agein.addEventListener("input", test);
licenseagein.addEventListener("input", test);
licenseagein.addEventListener("input", test);

submit.addEventListener("click", result);
