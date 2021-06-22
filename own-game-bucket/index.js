let playername = prompt('Привет! как тебя зовут?');

while (playername == '' || playername == null) {
    playername = prompt('Привет! как тебя зовут?');
}

alert(playername + ', Давай сыграем в игру. Я загадаю число, а ты отгадаешь. Чтобы было проще, я буду говорить "много" и "мало" после каждой попытки' );

function random(guessnumber) {
    return Math.ceil(Math.random() * guessnumber);
}

let guessnumber = random(100); 
alert(guessnumber);
let guessing = prompt('Какое число я загадал?');
let number = 1;



while (guessing != guessnumber) {
   
    if (guessing > guessnumber) {
        guessing = prompt('Много, поробуй ещё раз');
        number = number + 1;
    }
    if (guessing < guessnumber) {
        guessing = prompt('Мало, поробуй ещё раз');
        number = number + 1;
    }
    
}
alert ('Ты угадал! Это число ' + guessnumber + ' Поздравляю. Тебе потребовалось ' + number + ' попыток' )