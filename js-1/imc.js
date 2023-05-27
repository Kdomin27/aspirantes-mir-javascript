// Definición de la función bmi
function bmi(peso, altura) {
    var bmi = peso / (altura * altura);
    return bmi;
  }
  
  // Ejemplos de uso
  console.log(bmi(65, 1.8)); // 20.061728395061728
  console.log(bmi(72, 1.6)); // 28.124999999999993
  console.log(bmi(52, 1.75)); // 16.979591836734695