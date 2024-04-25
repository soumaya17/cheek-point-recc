// Leap Year Checker
function checkYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Weather Clothing Adviser

function clothingAdviser() {
  // Prompt the user for the current temperature
  const temperature = parseFloat(
    prompt("Please enter the current temperature in degrees Celsius:")
  );

  // Prompt the user for whether it is raining
  const raining = prompt("Is it raining? (yes/no)").toLowerCase().trim();

  // Define a variable to hold the clothing advice
  let advice = "";

  // Determine clothing advice based on temperature range
  if (temperature < 0) {
    advice = "It's freezing! Wear a heavy coat, scarf, gloves, and a hat.";
  } else if (temperature >= 0 && temperature < 10) {
    advice = "It's cold! Wear a coat, hat, and warm clothing.";
  } else if (temperature >= 10 && temperature < 20) {
    advice = "It's cool! Wear a jacket or sweater.";
  } else if (temperature >= 20 && temperature < 30) {
    advice = "It's warm! Wear light clothing.";
  } else {
    advice = "It's hot! Wear shorts and a t-shirt.";
  }

  // Add rain advice if necessary
  if (raining === "yes") {
    advice += " Don't forget an umbrella or a raincoat, as it is raining.";
  }

  // Display the advice to the user
  alert(advice);
}
