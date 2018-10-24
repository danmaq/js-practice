// ランダムな数値生成
console.log(Math.random());


// ランダムなインデックス生成
let primes = [2, 3, 5, 7, 11, 13, 17];
console.log(primes[Math.random() * primes.length]);


// 小数の整数化
let random = Math.random() * primes.length;
console.log(primes[Math.trunc(random)]);


// 小数の切り捨てと削除との違い
console.log(Math.floor(-4.5));
console.log(Math.trunc(-4.5));


// 文字列の数値化
console.log(Number.parseInt('33', 10), 4); // 29


// 不適切な文字列の数値化
console.log(Number.parseInt('Hello'));
console.log(Number.parseInt('1F'));


// 一見不適切に見えるが、正しいな文字列の数値化
console.log(Number.parseInt('Hello', 36));