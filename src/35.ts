class RandomGenerator {
    // Example method to implement
    getRandomInt(min: number, max: number): number {
        const range = max - min + 1;
        let random = Math.floor(Math.random() * range);
        if (random >= min) return random;
        else return this.getRandomInt(min, random - 1);
    }
}

const generator = new RandomGenerator();
console.log(generator.getRandomInt(5, 20));
