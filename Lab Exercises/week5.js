
let salesData = [];
for (let i = 0; i < 30; i++) {
  salesData.push(Math.floor(Math.random() * 1000));
}
console.log(salesData);

let totalSales = 0;
for (let i = 0; i < salesData.length; i++) {
  totalSales += salesData[i];
}

let averageSales = totalSales / salesData.length;
console.log(`Average sales: ${averageSales}`);

let maxSales = salesData[0];
let maxSalesDay = 1;
for (let i = 1; i < salesData.length; i++) {
  if (salesData[i] > maxSales) {
    maxSales = salesData[i];
    maxSalesDay = i + 1;
  }
}
console.log(`Day with the maximum sales: ${maxSalesDay}`);

let salesAmounts = {};

for (let i = 0; i < salesData.length; i++) {
  if (salesAmounts[salesData[i]] === undefined) {
    salesAmounts[salesData[i]] = 1;
  } else {
    salesAmounts[salesData[i]]++;
  }
}

let mostCommonSalesAmount = 0;

for (let key in salesAmounts) {
  if (salesAmounts[key] > mostCommonSalesAmount) {
    mostCommonSalesAmount = key;
  }
}

console.log(`Most common sales amount: ${mostCommonSalesAmount}`);
