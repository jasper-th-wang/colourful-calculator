function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
  return 0;
}

function displayCalculation() {
  $('.operator').click(function () {
    let operand1 = $('#operand1').val();
    operand1 = parseInt(operand1);

    let operand2 = $('#operand2').val();
    operand2 = parseInt(operand2);

    let operator = $(this).attr('value');

    let result = calculate(operand1, operator, operand2);

    result = result ? result : '';

    $('#result').html('<b>' + result + '</b>');
  });
}

function setup() {
  displayCalculation();
}

$(document).ready(setup);
