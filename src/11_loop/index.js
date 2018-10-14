// 配列に対する絞り込み
let array = [2, 3, 5, 7, 10, 11, 13];
let odds = array.filter(v => v % 2 > 0);


// 配列に対する射影加工
let double = array.map(v => v ** 2);


// 配列に対する、何もしないループの使用例
odds.forEach(v => console.log(v));
double.forEach(v => console.log(v));


// 同一要素を持つ、配列の生成
let ones = Array.from({ length: 5 }, () => 1);


// 連番要素を持つ、配列の生成
let range = Array.from({ length: 5 }, (v, i) => i);


// インデックスが奇数のものだけを抽出する
let odds2 = array.filter((v, i) => i % 2);


// 要素からインデックスを引いた結果、ゼロ以外の要素が一つでもあれば true
let indexes = array.some((v, i) => v - i);


// 配列要素の集計
let scores = [50, 90, 70];
let total = scores.reduce((accumulator, current) => accumulator + current, 0);
let average = total / scores.length;


// オブジェクトからの配列生成
let obj = { a: 1, b: 2, c: 3, d: 4 };
let keys = Object.keys(obj);
console.log(obj[keys[1]]) // obj.b にアクセス
keys.map(key => console.log(obj[key])); // 一括アクセス
