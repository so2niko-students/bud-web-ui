const randomBodyParts2 = ["жарти", "думки", "погляди", "слова"];
const randomAdjectives2 = ["пласкіші", "дурнуватіші", "довші", "потворніші"];
const randomAnimalParts2 = ["мізки", "яйця", "хвіст", "вуха", "шия"];
const randomAnimals2 = ["курки", "віслюка", "крокодила", "страуса"]

const drazhe = {
    bodyPart : randomBodyParts2[Math.floor(Math.random() * randomBodyParts2.length)],
    adjective : randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)],
    animalPart : randomAnimalParts2[Math.floor(Math.random() * randomAnimalParts2.length)],
    animal : randomAnimals2[Math.floor(Math.random() * randomAnimals2.length)]
};

drazhe.toString = function(){
    return `У тебе ${this.bodyPart} ще ${this.adjective} ніж ${this.animalPart} у ${this.animal}!`;
}

document.querySelector('.output').innerHTML = drazhe;