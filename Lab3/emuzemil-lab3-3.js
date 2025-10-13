function sortNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Please provide an array of numbers.");
        return [];
    }

    return numbers.slice().sort((a, b) => a - b);
}

// Test arrays
let test1 = [0, 4, 2, 6, 7];
let test2 = [-2, 14, 9, 5, 1];
let test3 = [24, 12, 18, 6, 0];

console.log("Original Array:", test1, "Sorted Array:", sortNumbers(test1));
console.log("Original Array:", test2, "Sorted Array:", sortNumbers(test2));
console.log("Original Array:", test3, "Sorted Array:", sortNumbers(test3));
