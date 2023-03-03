const readlineSync = require('readline-sync');
const n = readlineSync.question('Enter value of n\n');

let str = '';
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    str += `${j} `;
  }
  console.log(str);
  str = '';
}
/* 
// * * * * *
// * * * *
// * * *
// * * 
// *
let str = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    str += '* ';
  }
  console.log(str);
  str = '';
}
 */

/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

const readlineSync = require('readline-sync');
const n = readlineSync.question('Enter value of n\n');

function printPattern(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i} `;
    }
    console.log(str);
    str = '';
  }
}

printPattern(n);


/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5


const readlineSync = require('readline-sync');
const n = readlineSync.question('Enter value of n\n');

function printPattern(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${j} `;
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