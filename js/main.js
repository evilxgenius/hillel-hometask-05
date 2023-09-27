// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
// - отримати від користувача через три prompt три числа
// - показати через alert середнє арифметичне цих чисел

const numberInput = (pos) => {
    let number;

    while (typeof number !== 'number') {
        let answer = prompt(`enter number #${pos}:`);

        // if the user clicks Cancel, the script will say 'Bye'
        if (answer === null)
            return null;
        // If the user inputs '' or NaN, the script ask the user to input a number again
        else if (answer.trim().length === 0 || Number.isNaN(+answer))
            alert(`Number #${pos}: You passed <${answer}>. Please pass a Number!`);
        else
            number = +answer;
    }

    return number;
}

let bye = () => alert('Bye!');

const calcAvg = () => {
    let sum = 0;
    let numbers = [];

    for (let i of [1, 2, 3]) {
        let num = numberInput(i);

        if (num === null) {
            bye();
            return;
        } else {
            sum += num;
            numbers.push(num);
        }
    }

    alert(`Result: Average of ${numbers.join(', ')} = ${sum / numbers.length}`)
    bye();
}

calcAvg();
