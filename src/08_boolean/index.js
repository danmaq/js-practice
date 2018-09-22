// ブーリアン値
let on = true;
let off = false;


// ブーリアン値による条件分岐
let helloWorld = bool => bool ? 'Hello' : 'World';
let hello = helloWorld(true);
let world = helloWorld(false);


// ブーリアン値による分岐で別の演算を行う
let nahan = bool => bool ? (33 - 4) : (33 + 4);
let kan = nahan(true); // 29
let nai = nahan(false); // 37


// 分岐しなかった方は、そもそも処理自体をしない
let blackOrWhite = bool => bool ? console.log('black') : console.log('white');
blackOrWhite(true);
blackOrWhite(false);


// 多段条件分岐
let a = false;
let b = false;
let result =
  a ? 1 : // a は true ではないので、1 にはならない
  b ? 2 : // b は true ではないので、2 にもならない
  3; // 結局この値になる
