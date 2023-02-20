const readlineSync = require('readline-sync');
const n = readlineSync.question('Enter value of n\n');

function printPattern(n){
  if(!(n >0 && n <=20)) return;
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str += '* ';
    }
    console.log(str);
    str = '';
  }
}

printPattern(n);

/*
n = 5;

*****
*****
*****
*****
*****

n = 3;

***
***
***

const readlineSync = require('readline-sync');
const n = readlineSync.question('Enter value of n\n');

function printPattern(n){
  if(!(n >0 && n <20)) return;
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += '* ';
    }
    console.log(str);
    str = '';
  }
}

printPattern(n);
*/