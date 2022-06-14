const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let seattle = {
//   location:'seattle',
//   hCust: {min: 23, max: 65},
//   aSale: 6.3,
//   hourlySales: [],
//   totalSales: 0,
// };

// Math.random();

// function randoNum(num) {
//   return Math.floor(Math.random() * num) +1;

// }

// console.log(randoNum(10));

// function gNumber(min, max) {
//   return Math.round(Math.random() * (max - min)) + min;
// }

// console.log(gNumber(1,50));

function hourlyCustomers(max, min, avg) {
  let hourlyArray = [];
  for (i = 0; i <= 12; i++) {
    hourlyArray.push(Math.round((Math.round(Math.random() * (max - min) + min) * avg)));
  }
  return hourlyArray;
}

function CookieShop(name, min, max, avg) {
  this.name = name;
  this.hourlyMin = min;
  this.hourlyMax = max;
  this.avgCookies = avg;
  this.hourlyArray = hourlyCustomers(max, min, avg);
}

const seattle = new CookieShop('seattle', 23, 65, 6.3);
const tokyo = new CookieShop('tokyo', 3, 24, 1.2);
const dubai = new CookieShop('dubai', 11, 38, 3.7);
const paris = new CookieShop('paris', 20, 38, 2.3);
const lima = new CookieShop('lima', 2, 16, 4.6);

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);