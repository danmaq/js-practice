// if 文を使った条件分岐
let a = true;
if (a) {
  console.log('正解');
} else {
  console.log('不正解');
}


// else 文は省略可
if (a) {
  console.log('正解');
}


// 比較演算子
let n = 0;
let equals = n === 0;


// 文字列と数字との比較結果
console.log(1 === '1');


// 条件演算子と比較演算子、if 文の組み合わせ
let z = 0;
console.log(z === 0 ? 'z is Zero' : 'anysome');

if (z === 0) {
  console.log('z is Zero');
} else {
  console.log('anysome');
}


// 文字列に対する比較
let hoge = 'foo';
let fuga = 'foo';
console.log(hoge === fuga); // true


// if 文の入れ子
let x = 0;
let y = 1;
if (x === 0) {
  if (y === 1) {
    console.log('Hello');
  }
}


// 論理演算子
console.log(x === 0 && y === 1 ? 'xが0かつ、yが1である' : 'ちゃうねん');


// truthy の事例
console.log('false' ? '条件式は true とみなせる' : 'false とみなせる');


// truthy 値を true に変換する
let result = !!'false';
console.log(result);


// else if 文の例
let yesterday;
if (yesterday === 'うどん') {
  console.log('そば');
} else if (yesterday === 'そば') {
  console.log('ラーメン');
} else {
  console.log('うどん');
}


// switch 文の例
switch (yesterday) {
  case 'うどん':
    console.log('そば');
    break;
  case 'そば':
    console.log('ラーメン');
    break;
  default:
    console.log('うどん');
    break;
}


// switch 文のウォークスルー
let getCategory = food => {
  switch (food) {
    case 'うどん':
    case 'そば':
    case 'ラーメン':
      return '麺';
    case '牛丼':
    case '親子丼':
    case '中華丼':
    case '麻婆丼':
      return '丼';
    default:
      return '未分類';
  }
};
