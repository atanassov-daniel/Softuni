function solve() {
    return {
        mage(name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            };
        },
        fighter(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            };
        }
    };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball"); // Scorcher cast fireball
scorcher.cast("thunder"); // Scorcher cast thunder
scorcher.cast("light"); // Scorcher cast light

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight(); // Scorcher 2 slashes at the foe!

console.log(scorcher2.stamina); // 99
console.log(scorcher.mana); // 97