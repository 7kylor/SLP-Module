// 4.Implement program that should:
// Generate or simulate a set of sales data for a period (e.g., 30 days).
// Calculate and display the average sales over this period.
// Determine and display the day with the maximum sales.
// Identify and display the most common sales amount during this period.

// Generate or simulate a set of sales data for a period (e.g., 30 days).
let salesData = [];
for (let i = 0; i < 30; i++) {
  salesData.push(Math.floor(Math.random() * 1000));
}
console.log(salesData);

// Calculate and display the average sales over this period.
let totalSales = 0;
for (let i = 0; i < salesData.length; i++) {
  totalSales += salesData[i];
}

let averageSales = totalSales / salesData.length;
console.log(`Average sales: ${averageSales}`);

// Determine and display the day with the maximum sales.
let maxSales = salesData[0];
let maxSalesDay = 1;
for (let i = 1; i < salesData.length; i++) {
  if (salesData[i] > maxSales) {
    maxSales = salesData[i];
    maxSalesDay = i + 1;
  }
}
console.log(`Day with the maximum sales: ${maxSalesDay}`);

// Identify and display the most common sales amount during this period.
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
