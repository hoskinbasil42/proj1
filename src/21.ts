function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

// Example usage
const randomNumber = getRandomInt(10) + 5;
console.log(randomNumber); // Output: 9
