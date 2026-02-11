let i = 3;

while (i) {
  alert( i-- );
} //3 - 2 - 1

let sum = 0;

////////////////////////
while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
//////////////
let l = 0;
do {
  alert( l );
  l++;
} while (l < 3);