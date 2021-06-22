let playername = prompt('Как тебя зовут?');

while (playername == '' || playername == null) {
    playername = prompt('Как тебя зовут?');
}

alert (playername + ' , Давай сыграем в игру! Я буду загадывать числа от 1 до 100, а ты должен угадать. Чтобы это не заняло много времени, на каждую твою попытку я буду говорить "много" или "мало"' );

let number = random(1000);
let guessing = prompt ('Загадал! Напиши число!');
let numberofguessing = 0;

while (guessing != gip) {
    guessing = prompt ('Загадал! Напиши число!');
}
while (guessing != number) {
    if (guessing > number) {
        guessing = prompt ('Много, попробуй ещё раз')
        numberofguessing = numberofguessing+1; 
} 
    if (guessing < number) {
        guessing = prompt ('Мало, попробуй ещё раз')
        numberofguessing = numberofguessing+1;
    }
} 
alert ('Ты угадал! Это число ' + number + ' Поздравляю. Тебе потребовалось ' + numberofguessing + ' попыток' )