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

// console.log(clover, baxter);

// Change values
clover.isTired = 8;
francine.isTired = 9;
// console.log(sora, clover, baxter, cleo, francine);

const allPets = [
    sora, 
    clover, 
    baxter, 
    cleo, 
    francine
];
// console.log(allPets);

// use pets to change html
const showPets = function(petArray) {
    pets.innerHTML = "";
// pet is the variable for the array
    for (let pet of petArray){
        // use let since it will be reassigned
        let status = "ready to play!";
        if (pet.isTired >= 7){
            status = "sleeping";
        }
        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
};

// calls function to add li to ul; loops through the allPets array
statusButton.addEventListener("click", function(){
    showPets(allPets);
});
  