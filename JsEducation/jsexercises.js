// 1 Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser = "Edge"
if (browser==="Edge") { console.log( "You've got the Edge!" );}
else if (browser==="Chrome" ||browser==="Firefox"||browser==="Safari"||browser==="Opera" ) {  alert( 'Okay we support these browsers too' );}
else{ alert( 'We hope that this page looks ok!' );};
// Вопрос по задаче в учебнке правильный ответ через ==, но switch это === и  получаеться что в учебнике не полное совпадение 

// 2 
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
let number = 3;
switch(number){
case 0:alert('Вы ввели число 0');break;
case 1:alert('Вы ввели число 1');break;
case 2:
case 3:console.log('Вы ввели число 2, а может и 3');
break;
};

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
// //   }

function checkage (age) {
return (age>18) || confirm('Получается школьник ?')
};
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function getMinNumber (num, num2) {
if(num>num2){return num2}
else{return num}
};
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow (x,n){
    if (n<1) {return alert('так не умею')}
    else {
let powReturn=x;
for (let i =0; i<n;i++){ //Можно через **, но так не интересно
powReturn*=x; 
}
}
return powReturn;
};

