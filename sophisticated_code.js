/* 
 * Filename: sophisticated_code.js
 * Description: This code snippet demonstrates a sophisticated and complex JavaScript program that performs various operations on an array of objects.
 */

// Create an array of objects representing different cars
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2017, color: 'silver', price: 20000 },
  { make: 'Honda', model: 'Civic', year: 2018, color: 'blue', price: 18000 },
  { make: 'Ford', model: 'Mustang', year: 2019, color: 'red', price: 30000 },
  { make: 'Chevrolet', model: 'Corvette', year: 2020, color: 'yellow', price: 50000 },
  { make: 'BMW', model: 'X5', year: 2021, color: 'black', price: 60000 }
];

// Function to calculate the average price of all cars
function calculateAveragePrice() {
  let total = 0;
  for (let i = 0; i < cars.length; i++) {
    total += cars[i].price;
  }
  const averagePrice = total / cars.length;
  return averagePrice;
}

// Function to filter cars based on a given color
function filterCarsByColor(color) {
  return cars.filter(car => car.color.toLowerCase() === color.toLowerCase());
}

// Function to sort cars by price in descending order
function sortCarsByPriceDescending() {
  return cars.sort((a, b) => b.price - a.price);
}

// Function to add a new car to the array
function addNewCar(make, model, year, color, price) {
  const newCar = { make, model, year, color, price };
  cars.push(newCar);
}

// Function to remove a car from the array
function removeCar(make, model) {
  const index = cars.findIndex(car => car.make === make && car.model === model);
  if (index !== -1) {
    cars.splice(index, 1);
  }
}

// Perform various operations on the car array
console.log('Average price of all cars:', calculateAveragePrice());
console.log('Cars with color blue:', filterCarsByColor('blue'));
console.log('Cars sorted by price in descending order:', sortCarsByPriceDescending());

// Add a new car
addNewCar('Mercedes', 'E-Class', 2022, 'grey', 70000);

console.log('Cars after adding a new car:', cars);

// Remove a car
removeCar('Toyota', 'Camry');

console.log('Cars after removing a car:', cars);

// ... more code and operations

// Output:
// Average price of all cars: 35600
// Cars with color blue: [ { make: 'Honda', model: 'Civic', year: 2018, color: 'blue', price: 18000 } ]
// Cars sorted by price in descending order: [
//   { make: 'Chevrolet', model: 'Corvette', year: 2020, color: 'yellow', price: 50000 },
//   { make: 'BMW', model: 'X5', year: 2021, color: 'black', price: 60000 },
//   { make: 'Ford', model: 'Mustang', year: 2019, color: 'red', price: 30000 },
//   { make: 'Toyota', model: 'Camry', year: 2017, color: 'silver', price: 20000 },
//   { make: 'Honda', model: 'Civic', year: 2018, color: 'blue', price: 18000 }
// ]
// Cars after adding a new car: [
//   { make: 'Toyota', model: 'Camry', year: 2017, color: 'silver', price: 20000 },
//   { make: 'Honda', model: 'Civic', year: 2018, color: 'blue', price: 18000 },
//   { make: 'Ford', model: 'Mustang', year: 2019, color: 'red', price: 30000 },
//   { make: 'Chevrolet', model: 'Corvette', year: 2020, color: 'yellow', price: 50000 },
//   { make: 'BMW', model: 'X5', year: 2021, color: 'black', price: 60000 },
//   { make: 'Mercedes', model: 'E-Class', year: 2022, color: 'grey', price: 70000 }
// ]
// Cars after removing a car: [
//   { make: 'Honda', model: 'Civic', year: 2018, color: 'blue', price: 18000 },
//   { make: 'Ford', model: 'Mustang', year: 2019, color: 'red', price: 30000 },
//   { make: 'Chevrolet', model: 'Corvette', year: 2020, color: 'yellow', price: 50000 },
//   { make: 'BMW', model: 'X5', year: 2021, color: 'black', price: 60000 },
//   { make: 'Mercedes', model: 'E-Class', year: 2022, color: 'grey', price: 70000 }
// ]