function calculateMedian(numbers: number[]): number {
    numbers.sort((a, b) => a - b);
    let mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return (numbers[mid] + numbers[mid - 1]) / 2;
    } else {
        return numbers[mid];
    }
}
