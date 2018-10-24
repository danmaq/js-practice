// 定数ではないので、変数が上書きできてしまう例
let name = 'Slim Shady';
name = 'Tagosaku';
console.log(name);


// 定数なので、上書きできない例
const name2 = 'Slim Shady';
// const name2 = 'Tagosaku'; // Error!
// let name2 = 'Tagosaku'; // Error!


// 定数化は中身に対して適用できないことの検証
const obj = { a: 1, b: 2, c: 3 };
obj.b = 0;
console.log(obj);


// オブジェクト内部の定数化
const freezed = Object.freeze(obj);


// 変数のスコープ
let x = 0;
{
  let x = 1;
  console.log(x); // 1
}
console.log(x); // 0