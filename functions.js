function calculateAge(name, birthYear, currentYear) {
  return `${name}, Ваш возраст ${currentYear - birthYear}`;
}

const name = prompt("Введите ваше имя:");
const birthYear = +prompt("Введите год рождения:");
const currentYear = +prompt("Введите нынешний год:");

const result = calculateAge(name, birthYear, currentYear);
alert(result);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let amount = +prompt("Введите количество примеров:");

for (let i = 0; i < amount; i++) {
  let one = random(1, 10);
  let two = random(1, 10);
  let symbol = random(1, 4);
  let result = 0;
  let operator = "";

  if (symbol === 1) {
    result = one + two;
    operator = "+";
  } else if (symbol === 2) {
    result = one - two;
    operator = "-";
  } else if (symbol === 3) {
    result = one * two;
    operator = "*";
  } else if (symbol === 4) {
    result = one / two;
    operator = "/";
  }

  let answer = +prompt(`${one} ${operator} ${two} =`);

  if (answer === result) {
    alert(`Ваш ответ верный - ${result}`);
  } else {
    alert(`Ваш ответ не верный - ${answer}. Правильный ответ - ${result}!`);
  }
}

alert('Не ставьте пожалуйста 4🙏🏼. Я всегда буду сдавать дз во время. Spasibo')
