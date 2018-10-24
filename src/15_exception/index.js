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


// 例外処理の入れ子と、後片付け処理の定義
try {
  try {
    throw new Error('やーめた！');
  } catch (err) {
    throw err;
  }
} finally {
  console.log('ここで後片付け');
}
// ここから先は catch されないためエラー扱いとなり、実行されない