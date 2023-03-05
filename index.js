// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

let str = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    str += '* ';
  }
  console.log(str);
  str = '';
}

for (let k = 4; k >= 1; k--) {
  for (let l = 1; l <= k; l++) {
    str += '* '
  }
  console.log(str);
  str = '';
}

/*

//         *
//       * * *
//     * * * * *
//   * * * * * * *      
// * * * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

          
let str = '';
for (let i = 0; i <= 4; i++) {
  for (let j = 4; j > i; j--) {
    str += '  ';
  }
  for (let k = 0; k < ((2 * i) + 1); k++) {
    str += '* '
  }
  console.log(str);
  str = '';
}
for(let l = 4; l>=0; l--){
  for(let m = 4; m>l; m--){
    str += '  ';
  }
  for(let n = 0; n< ((2 * l) + 1); n++){
    str += '* ';
  }
  console.log(str);
  str = '';
}

/*
// INVERSE OF PREVIOUS PATTERN:

let str = '';
for(let i = 4; i >= 0; i--){
  for(let j = 4; j > i; j--){
    str += '  ';
  }
  for(let k= ((2*i) + 1); k > 0; k--){
    str += '* '
  }
  console.log(str);
  str = '';
}

/* 
//       *
//     * * *
//   * * * * *
// * * * * * * *

let str = '';
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    str += '  ';
  }
  for(let k = 0; k< ((2*i)+1); k++){
    str += '* ';
  }
  console.log(str);
  str = '';
}
*/

/* 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

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
 */
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