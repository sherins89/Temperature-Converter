function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

function handleTemperatureConversion() {
  const input = prompt("Temperature in Fahrenheit:");
  const fahrenheit = parseFloat(input);

  if (isNaN(fahrenheit)) {
    alert("Please enter a valid number.");
    return;
  }

  const celsius = convertToCelsius(fahrenheit);
  const description = describeTemperature(fahrenheit);

  alert(
    `${fahrenheit}°F is equal to ${celsius.toFixed(
      2
    )}°C. It feels ${description}.`
  );
}
