function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array is empty");
    }

    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
