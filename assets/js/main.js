const bodysize = document.getElementById("bodysize");
const age = document.getElementById("age");
const weight = document.getElementById("weight");
const activity = document.getElementById("activity");
const female = document.getElementById("female");
const male = document.getElementById("male");

const kcalBaseResult = document.getElementById("kcalBaseResult");
const kJBaseResult = document.getElementById("kJBaseResult");
const kcalTotalResult = document.getElementById("kcalTotalResult");
const kJTotalResult = document.getElementById("kJTotalResult");

const btnCalculate = document.getElementById("btnCalculate");

function kcalCalculate() {
  if (male.checked == true) {
    const maleKcalBaseResultNumber =
      66.47 + 13.7 * weight.value + 5 * bodysize.value - 6.8 * age.value;
    kcalBaseResult.innerHTML = maleKcalBaseResultNumber.toFixed(2);
    kcalTotalResult.innerHTML = (
      maleKcalBaseResultNumber * activity.value
    ).toFixed(2);
    kJBaseResult.innerHTML = (maleKcalBaseResultNumber * 4.1868).toFixed(2);
    kJTotalResult.innerHTML = (
      maleKcalBaseResultNumber *
      activity.value *
      4.1868
    ).toFixed(2);
  } else if (female.checked == true) {
    const femaleKcalBaseResultNumber =
      655.1 + 9.6 * weight.value + 1.8 * bodysize.value - 4.7 * age.value;
    kcalBaseResult.innerHTML = femaleKcalBaseResultNumber.toFixed(2);
    kcalTotalResult.innerHTML = (
      femaleKcalBaseResultNumber * activity.value
    ).toFixed(2);
    kJBaseResult.innerHTML = (femaleKcalBaseResultNumber * 4.1868).toFixed(2);
    kJTotalResult.innerHTML = (
      femaleKcalBaseResultNumber *
      activity.value *
      4.1868
    ).toFixed(2);
  }
}

btnCalculate.addEventListener("click", kcalCalculate);
