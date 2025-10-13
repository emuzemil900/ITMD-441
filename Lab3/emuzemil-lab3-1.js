function minMaxAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.log("Please enter an array of numbers.");
        return;
    }

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;

    console.log(`Total Numbers: ${numbers.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
