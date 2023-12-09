const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

// factory function
const createPet = function(name, species){
    // object literal
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        // create method for sleep
        sleep: function(){
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
    // create property method
        play: function(){
            if (this.isTired === 10){
                console.log ("Too tired to play.");
                this.sleep()
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
           
        }
    };
    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
// verify objects and parameters created
// console.log(sora, clover, baxter, cleo, francine);
clover.sleep();
baxter.play();

console.log(clover, baxter);
