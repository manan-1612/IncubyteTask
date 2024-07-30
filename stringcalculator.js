class StringCalculator {
    
    /**
     * Adds numbers in a string and returns the sum.
     * @param {string} numbers - The string containing numbers.
     * @returns {number} - The sum of the numbers.
     */
    add(numbers) {

        // Return 0 for an empty string
        if (numbers === "") {
            return 0;
        }

        let delimiter = ",";
        let numStr = numbers;

        // Check for custom delimiter
        if (numbers.startsWith("//")) {
            const newlineIndex = numbers.indexOf("\n");
            delimiter = numbers.substring(2, newlineIndex);
            numStr = numbers.substring(newlineIndex + 1);
        }

        // Replace new lines with delimiter
        numStr = numStr.replace(/\n/g, delimiter);

        // Split the string based on the delimiter
        const tokens = numStr.split(delimiter);
        const numbersList = [];
        const negativeNumbers = [];

        // Parse each token to an integer and check for negatives
        for (const token of tokens) {
            const number = parseInt(token, 10);
            if (number < 0) {
                negativeNumbers.push(number);
            }
            numbersList.push(number);
        }

        // Throw an exception if there are negative numbers
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        // Sum up all the numbers in the list
        return numbersList.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = new StringCalculator();
