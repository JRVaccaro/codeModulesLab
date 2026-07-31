export class Character {
    constructor(name){
        this.name = name;
        this.health = health;
        this.inventory = inventory;
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}`);
        return result;
    }
}
export class Adventurer extends Character{
    constructor(name, role){
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }
    scout(){
        console.log(`${this.name} is scouting about`)
        super.roll();
    }

}