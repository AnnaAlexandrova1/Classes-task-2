export default class Character {
    constructor(name, type) {
      let list = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    if (name.length <2 || name.length > 10 || name === undefined){
        throw new Error('Длина имени не соответствует условиям');
    }
    if (!list.includes(type)) {
        throw new Error('Не соответствие заданным типам');
    }
    this.name = name;
    this.type = type;
   };
    health = 100;
    level =  1;
    attack = 0;
    defence = 0;
  }
  
  
  
  