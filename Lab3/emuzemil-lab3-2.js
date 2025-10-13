function countVowels(str) {
    if (typeof str !== "string") {
        console.log("The input must be a string.");
        return 0;
    }

    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Test words
console.log("word: orange vowels:", countVowels("orange"));
console.log("word: instrument vowels:", countVowels("instrument"));
console.log("word: recreation vowels:", countVowels("recreation"));
