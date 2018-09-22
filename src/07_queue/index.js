let queue = array => {
  // TODO: ここを実装してください
};
let items = [2, 3, 5, 7, 11];
items = queue(items); // items は [3, 5, 7, 11, 2] となる
items = queue(items); // items は [5, 7, 11, 2, 3] となる
items = queue(items); // items は [7, 11, 2, 3, 5] となる
items = queue(items); // items は [11, 2, 3, 5, 7] となる
items = queue(items); // items は [2, 3, 5, 7, 11] となる