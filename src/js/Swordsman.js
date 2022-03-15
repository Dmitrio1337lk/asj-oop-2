import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(100, 1, 40, 10);
    this.name = name;
    this.type = type;
    if (this.name.length < 2 || this.name.length > 10) throw new Error('Невалидное имя');
    if (this.type !== 'Swordsman') throw new Error('Невалидный класс');
  }
}