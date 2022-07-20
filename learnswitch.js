const score = 30
switch (true){

case (score>70):
console.log('Excellent');
break;

case  ( score < 59 || score > 50):
console.log('Very Good');
break;

case (score > 40 || score < 49):
console.log('Credit');
break;

case (score > 30 || score < 39):
console.log('Good');
break;

case (score < 30):
console.log('Fail');
break;

default:
    console.log('No Score');
    break;
}