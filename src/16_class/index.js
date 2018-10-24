// インスタンスの生成
{
  const instance = new Error();
  console.log(instance);
}

// new 以外の値の生成方法
{
  const num = 1;
  const bool = true;
  const str = 'baz';
  const array = [];
  const obj = {};
  const func = () => { };
  const nil = null;
  const undef = undefined;
  const symbol = Symbol('');
}

// 予め new されている
{
  console.log(console);
  console.log(document);
}


// クラスの定義とインスタンスの生成
{
  class Character { }
  new Character();
}


// クラスの実装と生成したインスタンスの使用

// 例題: キャラクター情報 1 体分の管理クラス。
// 名前とライフ数を持ち、自分のライフから、自分が生きているかどうかを計算する能力を持つ。
// 初期ライフは 10 固定、名前はインスタンス生成時に指定する。
{
  class Character {
    constructor(name) {
      this.life = 10;
      this.name = name;
    }
    isLive() {
      return this.life > 0;
    }
  }
  const party = [new Character('Kaban'), new Character('Fennec')];
  console.log(party[0].name)
  console.log(party[1].name)

  party[0].life = 0;
  console.log(party[0].isLive())
  console.log(party[1].isLive())
}


// static メソッドの実装
{
  class Character {
    constructor(name) {
      this.life = 10;
      this.name = name;
    }
    static charactersMaxLife(...chars) {
      return chars.reduce((accumulator, current) => Math.max(accumulator, current.life), 0);
    }
  }
  const party = [new Character('Kaban'), new Character('Fennec')];
  party[0].life = 4;
  party[1].life = 6;
  console.log(Character.charactersMaxLife(...party));
}


// カプセル化
{
  class Character {
    constructor(name) {
      this.innerLife = 10;
      this.name = name;
    }
    get life() {
      return this.innerLife;
    }
    damage(damages) {
      this.innerLife -= damages;
    }
    isLive() {
      return this.life > 0;
    }
  }
  const party = [new Character('Kaban'), new Character('Fennec')];
  party[0].damage(1);
  console.log(party[0].name, party[0].life);
}
