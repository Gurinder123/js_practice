function calculateBMI(){
  var weight = document.getElementById("weight").value;
  var feet = document.getElementById("feet").value;
  var inch = document.getElementById("inch").value;
  var heightInCm = feetToCmConverter((parseInt(feet)+inch/10));
  var bmi = (weight/(heightInCm/100 * heightInCm/100));
  document.write(bmiChecker(bmi));
}
function bmiChecker(bmi){
  if (bmi >= 19 && bmi <= 24.9) {
    return ("Congrats you are normal");
  }else if (bmi >= 25 && bmi <= 29.9) {
    return ("you are Overweight")
  }else if (bmi > 29.9) {
    return ("you should start excercising")
  }else {
    return ("you are Underrweight")
  }
}

function feetToCmConverter(feet){
   return feet * 30.48
}
