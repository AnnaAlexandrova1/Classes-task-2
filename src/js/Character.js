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

  levelUp(){
    if(this.health === 0){
      throw new Error('Нельзя повысить левел умершего')
    }
    this.level = this.level + 1;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
    this.health = 100;
  };

  damage(points){
    if(this.health === 0){
      throw new Error('Нельзя выполнить для умершего')
    }
    this.health =this.health - points * (1 - this.defence / 100)
  }
}
  
  
  