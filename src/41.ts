function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

const array1 = [5, 3, 8, 2, 7];
const array2 = [];

for (let i = 0; i < array1.length; i++) {
    const min = Math.min(...array1);
    const max = Math.max(...array1);
    const randomInt = getRandomInt(max - min + 1) + min;
    array2.push(randomInt);
}

console.log(array2);
