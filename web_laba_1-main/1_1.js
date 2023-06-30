function findMinimum() {
  let number = parseFloat(prompt("Введите число:"));
  let minimum = Infinity;

  let input = true;
  while (input) {
    if (!isNaN(number)) {
      if (number > 0 && number < minimum) {
        minimum = number;
      }
      number = parseFloat(prompt("Введите число:"));
    } else {
      input = false;
    }
  }

  if (minimum === Infinity) {
    alert("В последовательности нет положительных чисел.");
  } else {
    alert("Минимум среди положительных чисел: " + minimum);
  }
}