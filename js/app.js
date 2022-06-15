'use strict';

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const table = document.getElementById('table-area');


let seattle = {
  storeName: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCPC: 6.3,
  custAEH: [],
  totalSales: 0,
  hourlyCust: [],

  generateRan: function(){
    let randomNum = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomNum;
  },
  generateHourlyCust: function(){
    for (let i = 0; i < hours.length; i++){
      let randomNum = this.generateRan();
      this.hourlyCust.push(randomNum);
    }
    console.log(this.hourlyCust);
  },
  generateCookieSale: function(){
    this.generateHourlyCust();
    for (let i = 0; i < hours.length; i++){
      this.custAEH.push(Math.ceil(this.hourlyCust[i] * this.avgCPC));
    }
  }
};

let tokyo = {
  storeName: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgCPC: 1.2,
  custAEH: [],
  totalSales: 0,
  hourlyCust: [],

  generateRan: function(){
    let randomNum = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomNum;
  },
  generateHourlyCust: function(){
    for (let i = 0; i < hours.length; i++){
      let randomNum = this.generateRan();
      this.hourlyCust.push(randomNum);
    }
    console.log(this.hourlyCust);
  },
  generateCookieSale: function(){
    this.generateHourlyCust();
    for (let i = 0; i < hours.length; i++){
      this.custAEH.push(Math.ceil(this.hourlyCust[i] * this.avgCPC));
    }
  }
};

let dubai = {
  storeName: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgCPC: 3.7,
  custAEH: [],
  totalSales: 0,
  hourlyCust: [],

  generateRan: function(){
    let randomNum = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomNum;
  },
  generateHourlyCust: function(){
    for (let i = 0; i < hours.length; i++){
      let randomNum = this.generateRan();
      this.hourlyCust.push(randomNum);
    }
    console.log(this.hourlyCust);
  },
  generateCookieSale: function(){
    this.generateHourlyCust();
    for (let i = 0; i < hours.length; i++){
      this.custAEH.push(Math.ceil(this.hourlyCust[i] * this.avgCPC));
    }
  }
};

let paris = {
  storeName: 'paris',
  minCust: 20,
  maxCust: 38,
  avgCPC: 2.3,
  custAEH: [],
  totalSales: 0,
  hourlyCust: [],

  generateRan: function(){
    let randomNum = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomNum;
  },
  generateHourlyCust: function(){
    for (let i = 0; i < hours.length; i++){
      let randomNum = this.generateRan();
      this.hourlyCust.push(randomNum);
    }
    console.log(this.hourlyCust);
  },
  generateCookieSale: function(){
    this.generateHourlyCust();
    for (let i = 0; i < hours.length; i++){
      this.custAEH.push(Math.ceil(this.hourlyCust[i] * this.avgCPC));
    }
  }
};

let lima = {
  storeName: 'lima',
  minCust: 2,
  maxCust: 16,
  avgCPC: 4.6,
  custAEH: [],
  totalSales: 0,
  hourlyCust: [],

  generateRan: function(){
    let randomNum = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomNum;
  },
  generateHourlyCust: function(){
    for (let i = 0; i < hours.length; i++){
      let randomNum = this.generateRan();
      this.hourlyCust.push(randomNum);
    }
    console.log(this.hourlyCust);
  },
  generateCookieSale: function(){
    this.generateHourlyCust();
    for (let i = 0; i < hours.length; i++){
      this.custAEH.push(Math.ceil(this.hourlyCust[i] * this.avgCPC));
    }
  }
};
