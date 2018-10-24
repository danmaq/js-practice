// 基本的なオブジェクトの構成
let cat = {
  name: 'Tama',
  legs: 4,
  tails: 1,
  enemies: ['Water', 'Dogs']
};


// オブジェクトにおける、プロパティへのアクセス例
console.log(cat.name);
console.log(cat.legs);
console.log(cat.tails);
console.log(cat.enemies);


// オブジェクトの入れ子の事例
let H = {
  e: {
    l: {
      l: { o: 'こんにちは' }
    }
  }
};


// 特殊な名前のプロパティへのアクセス
let stranges = {
  1: 'One',
  '01name': 'Tama',
  'My-name-is': 'Slim shady'
};
console.log(stranges[1]);
console.log(stranges['01name']);
console.log(stranges['My-name-is']);


// ブラケット記法によるルックアップ例
let getFriendsType = name => ({
  momo: 'cat',
  kuro: 'dog',
  tama: 'cat',
  tora: 'cat',
  emi: 'human'
})[name];
console.log(getFriendsType('tama'));


// オブジェクトのルックアップ特性を利用した strategy パターンの例
let calc = op => ({
  add: x => x + x,
  sub: x => x - x,
  mul: x => x * x,
  div: x => x / x,
  mod: x => x % x
})[op];
console.log(calc('mul')(9));


// 未定義のプロパティやインデックスに対するアクセス
let emptyObject = {};
let emptyArray = [];
console.log(emptyObject.foo);
console.log(emptyArray[0]);


// プロパティの有無確認方法
let say = {
  man: 'hello',
  cat: 'miaow',
};
console.log('man' in say);
console.log('dog' in say);


// console に log は存在するかどうか
console.log('log' in console);
