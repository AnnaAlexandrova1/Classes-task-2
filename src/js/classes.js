import Character from './Character'

export class Bowerman extends Character{
    constructor(name, type){
    super(name, type)
    };
    attack = 26;
    defence = 25;
}

export class Swordsman extends Character{
    constructor(name, type){
    super(name, type)
    };
    attack = 40;
    defence = 10;
}

export class Magician extends Character{
    constructor(name, type){
    super(name, type)
    };
    attack = 10;
    defence = 40;
}

export class Daemon extends Character{
    constructor(name, type){
    super(name, type)
    };
    attack = 25;
    defence = 25;
}

export class Undead extends Character{
    constructor(name, type){
    super(name, type)
    };
    attack = 40;
    defence = 10;
}

export class Zombie extends Character{
    constructor(name, type){
    super(name, type)
    };
    attack = 10;
    defence = 40;
}