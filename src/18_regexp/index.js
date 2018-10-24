// 文字列の検索
const ppap = 'PenPineappleApplePen';
console.log(ppap.indexOf('apple') >= 0);


// 正規表現を使った、文字列の検索
console.log(/Pen./.exec(ppap));
