"use script";


let height = parseInt(prompt("Indtast din højde i centimeter:"));


let weight = parseInt(prompt("Indtast din vægt i kilogram:"));

    let bmi = weight / ((height / 100) ** 2);

    let category;
    if (bmi < 16) {
        category = "Svært Undervægtig";
    } else if (bmi >= 16 && bmi <= 18.4) {
        category = "Undervægtig";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Vægt";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overvægtig";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        category = "Moderat Overvægtig";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        category = "Svært Overvægtig";
    } else if (bmi >= 40){
        category = "Sygeligt Overvægtig";
    }

    alert(`Your BMI is ${bmi.toFixed(2)}\nKategori: ${category}`); // "\n" laver et linjeskift
