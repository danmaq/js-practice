// 文字列変数
let hello = 'Hello';


// 引用符が混在するパターン
let message = "We're programmer.";
let section = 'He says "Hi, my name is...".';


// エスケープ
let escape = 'He says "We\'re programmer.".';


// エスケープのエスケープ
let escape2 = 'let section = \'He says "We\\\'re programmer.".\'';
console.log(escape2);


// 改行のエスケープ
let jugem = '寿限無 寿限無 \
五劫の擦り切れ \
海砂利水魚の \
水行末 雲来末 風来末 \
食う寝る処に住む処 \
藪ら柑子の藪柑子 \
パイポ パイポ パイポのシューリンガン \
シューリンガンのグーリンダイ \
グーリンダイのポンポコピーのポンポコナーの \
長久命の長助';
console.log(jugem);


// 文字列の連結
let pen = 'Pen';
let ppap = pen + 'Pineapple' + 'Apple' + pen;
console.log(ppap);


// 文字列長
console.log('Tech'.length);
console.log(''.length);


// 文字列長は変数にも設定できる
let word = 'Hello';
let length = word.length;


// テンプレート リテラル
let spellA = '弱';
let spellB = '強';
let spell = `${spellA}肉${spellB}食`;


// ブラケット表記による、文字の抽出
console.log(hello[0]); // H
console.log(hello[1]); // e
console.log(hello[2]); // l
console.log(hello[3]); // l
console.log(hello[4]); // o
