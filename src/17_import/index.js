import Character from './Character.js';

// import/export の仕組みは、 Chrome では http(s) 経由でしか動作しません。
const char = new Character('Mami');
console.log(char.name, char.life);
char.damage(10);
console.log(char.name, char.life);
