function checkParentheses() {
    let str = document.getElementById("inputString").value;

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push('(');
      } else if (str[i] === ')') {
        if (stack.length === 0) {
          alert("Неправильное расположение скобок!");
          return;
        }
        stack.pop();
      }
    }

    if (stack.length === 0) {
      alert("Скобки расположены правильно!");
    } else {
      alert("Неправильное расположение скобок!");
    }
  }
