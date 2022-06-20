'use strict';

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeFormEl = document.getElementById('cookieForm');

storeFormEl.addEventListener('submit', function(event) {

  event.preventDefault();

  let name = event.target.location.value;
  let minCust = parseInt(event.target.min.value);
  let maxCust = parseInt(event.target.max.value);
  let avgCookies = parseInt(event.target.avgCookies.value);

  let store = new Store(name, minCust, maxCust, avgCookies);
  store.generateCookiesPerHour();
  store.renderRow();
});


function generateNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function Store(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySales = [];
  this.storeHours = hours;
  this.totalSales = 0;
  this.avgCookiePerCust = avgCookiePerCust;
}

Store.prototype.generateCookiesPerHour = function() {

  for (let i = 0; i < hours.length; i++) {
    let customersAtHour = generateNumberBetween(this.minCust, this.maxCust);
    let salesAtHour = Math.round(customersAtHour * this.avgCookiePerCust);
    this.hourlySales.push(salesAtHour);
    this.totalSales += salesAtHour;
  }

};

// function to render table and data //
Store.prototype.renderRow = function() {

  let tableEl = document.getElementById('table-area');
  let rowEl = document.createElement('tr');

  let cellName = document.createElement('td');
  cellName.textContent = this.name;
  rowEl.appendChild(cellName);

  for (let i = 0; i < this.hourlySales.length; i++) {
    let cellEl = document.createElement('td');
    cellEl.textContent = this.hourlySales[i];
    rowEl.appendChild(cellEl);
  }

  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalSales;
  rowEl.appendChild(totalCell);

  tableEl.appendChild(rowEl);
};

// setting the new variable that adds to the store function //
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// calls the function to generate and display store data//
seattle.generateCookiesPerHour();
seattle.renderRow();

tokyo.generateCookiesPerHour();
tokyo.renderRow();

dubai.generateCookiesPerHour();
dubai.renderRow();

paris.generateCookiesPerHour();
paris.renderRow();

lima.generateCookiesPerHour();
lima.renderRow();
