// Import module

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Defines speed to be attained 
function calculate(speed) {
  let points = 0;

  if (speed < 70) {
    return "OK";
  }
   // Point given for every 5km/s above 70
  else {
    points = Math.floor((speed - 70) / 5);
    // Suspends license once driver attains 12 points in total
    if (points > 12) {
      return "License Suspended";
    } else {
      return "Pints: " + points;
    }
  }
}

// Prompts the driver to input speed atained by car
rl.question("Enter Speed: ", (speedInput) => {
  const speed = parseInt(speedInput);
  const result = calculate(speed);
  console.log(result);
  rl.close();
})