// 関数
let helloProgramming = () => {
  console.log('Hello');
  console.log('Programming');
};
helloProgramming();
helloProgramming();


// 関数に引数を渡す
let hello = what => {
  console.log('Hello');
  console.log(what);
};
hello('Programming');
hello('World!');


// 関数の戻り値
let f = x => 2 * x;
let y = f(7);
console.log(y);


// 何も返さない関数の戻り値
let result = hello('Programming');
console.log(result);
