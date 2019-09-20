function bmi(weight, height){
    return weight * 703 / height;
}
var weight = parseInt(prompt("Enter your weight:"));
var height = parseInt(prompt("Enter your height:"));
var result = bmi(weight, height);

alert("Your BMI is" + result)