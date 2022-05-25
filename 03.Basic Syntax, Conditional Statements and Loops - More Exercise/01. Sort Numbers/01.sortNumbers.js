function solve(num1, num2, num3) {
    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;

    if (num1 >= num2 && num1 >= num3) {
        firstNum = num1;
        if (num2 >= num3) {
            secondNum = num2;
            thirdNum = num3;
        } else {
            secondNum = num3;
            thirdNum = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        firstNum = num2;
        if (num1 >= num3) {
            secondNum = num1;
            thirdNum = num3;
        } else {
            secondNum = num3;
            thirdNum = num1;
        }
    } else if (num3 >= num1 && num3 >= num2) {
        firstNum = num3;
        if (num1 >= num2) {
            secondNum = num1;
            thirdNum = num2;
        } else {
            secondNum = num2;
            thirdNum = num1;
        }
    }
    console.log(firstNum)
    console.log(secondNum)
    console.log(thirdNum)
}