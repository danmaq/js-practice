// 暗黙のデフォルト引数
{
  const double = x => x * 2;
  console.log(double());
}

// 明示的なデフォルト引数
{
  const double = (x = 4) => x * 2;
  console.log(double());

  // 明示的なデフォルト引数を持つ関数に undefined を指定した場合の例
  console.log(double(undefined));
}


// 配列を使って疑似的に可変引数を実現する
{
  const sum = (source = []) => source.reduce((p, c) => p + c, 0);
  sum([1, 2, 3, 4]);
}

// スプレッド構文で可変引数を実現する
{
  const sum = (...source) => source.reduce((p, c) => p + c, 0);
  sum(1, 2, 3, 4);
}

// 配列に対する分割代入
{
  const hero = ['h', 'e', 'r', 'o'];
  const [h, ...ero] = hero;
  console.log(h);
  console.log(ero);
}

// 配列リテラルから直接
{
  const [one, two, three, four] = [1, 2, 3, 4];
}

// 分割代入におけるスプレッド指定
{
  const [five, six, seven, ...more] = [5, 6, 7];
  console.log(more);
}

// オブジェクトに対する分割代入
const rank = {
  beginner: 3,
  basic: 6,
  hyper: 8,
  another: 11,
  black: 12
};
{
  const { basic, hyper, another } = rank;
  console.log(basic);
  console.log(hyper);
  console.log(another);
}

// オブジェクトに対する、分割代入とスプレッド構文の組み合わせ
{
  // // Edge では動作しません
  // const { beginner, black, ...otherObj } = rank;
  // console.log(otherObj);
}

// オブジェクト構築の省略表記
{
  const { basic, hyper, another } = rank;
  const otherObj2 = { basic, hyper, another };
  console.log(otherObj2);
}

// オブジェクト構築の省略記法を応用した、変数名を取得する関数
{
  const getVarsName = obj => Object.keys(obj);
  const hoge = 810;
  console.log(getVarsName({ getVarsName, hoge }));
}

// 引数をスプレッド記法で展開する
{
  const func = (a, b, c, d) => [a, b, c, d];
  const args = [2, 3, 5, 7, 11, 13, 15];
  const result = func(10, ...args);
}

// 特殊な名前のプロパティを分割代入する
{
  const problems = {
    '': '空文字',
    0: 'ゼロ',
    'my-name-is': 'Slim Shady'
  };
  const { '': empty, 0: zero, 'my-name-is': myName } = problems;
  console.log(empty);
  console.log(zero);
  console.log(myName);
}

// 分割代入とデフォルト引数の組み合わせ
{
  const definitely = {
    akane: 'seyana',
    aoi: 'soudayo'
  };
  const { akane, aoi, yukari = 'eeeeeeeeee' } = definitely;
  console.log(yukari);
}
