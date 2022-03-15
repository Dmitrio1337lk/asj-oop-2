import Bowerman from '../Bowerman';

import Undead from '../Undead';

import Magician from '../Magician';

test('Level should be go up', () => {
  const bowman = new Bowerman('Player', 'Bowerman');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
});

test('Attack and damage should be increased', () => {
  const bowman = new Bowerman('Player', 'Bowerman');
  bowman.levelUp();
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
});

test('health should be decreased', () => {
  const rogue = new Undead('Player-Un', 'Undead');
  rogue.damage(20);
  expect(rogue.health).toBe(85);
});

test('Dead character cant increase level', () => {
  const rogue = new Undead('Player-Un', 'Undead');
  rogue.health = 0;
  expect(() => rogue.levelUp()).toThrowError('Нельзя повысить уровень умершего персонажа');
});

test('I cant damage dead character', () => {
  const jaina = new Magician('Player-Ma', 'Magician');
  jaina.health = 0;
  expect(() => jaina.damage(5)).toThrowError('Невозможно нанести урон умершему персонажу');
});