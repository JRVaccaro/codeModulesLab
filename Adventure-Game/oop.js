
//Every character should also be able to make rolls. Add the roll method to the Character class.
class Character {
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

class Adventurer extends Character{
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
class Companion extends Character{
    constructor(name, type){
        super(name);
        this.type = type;
    }
    assist(){
        console.log(`${this.name} is helping out`);
    }
}




const robin = new Adventurer("Robin", "Fighter");
robin.inventory.push = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");

robin.companion.companion = new Companion("Frank", "Flea");

robin.companion.companion.inventory.push = ["small hat", "sunglasses"];




const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion:{
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        },

        roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}`);
        }
    }
};

adventurer.roll();
robin.roll();

robin.companion.assist();