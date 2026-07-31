
import { Character, Adventurer } from "./Character.js";






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