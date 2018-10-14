// 基本的な例外処理
try {
  const x = 0;
  x = 1;
} catch (err) {
  console.log(err);
}


// ユーザー定義の例外発生
try {
  throw new Error('やーめた！');
} catch (err) {
  console.log(err);
}
