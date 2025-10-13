function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        console.log("Please enter a number for Celsius.");
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test arrays
celsiusToFahrenheit(0);
celsiusToFahrenheit(20);
celsiusToFahrenheit(80);
