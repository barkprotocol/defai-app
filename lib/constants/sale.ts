// Constants
export const TOTAL_SUPPLY = 18_190_670_416; // Total supply of tokens
export const SOLD_AMOUNT = 7_500_000_000; // Amount of tokens sold so far
export const SALE_END_DATE = new Date('2025-02-15'); // End date of the token sale
export const RECOMMENDED_AMOUNTS = [100, 500, 1000, 5000]; // Recommended amounts for purchase

// Dynamic Calculations
export const REMAINING_SUPPLY = TOTAL_SUPPLY - SOLD_AMOUNT; // Remaining tokens in the sale
export const PERCENT_SOLD = (SOLD_AMOUNT / TOTAL_SUPPLY) * 100; // Percentage of tokens sold

// Sale Status Calculations
export const IS_SALE_ACTIVE = new Date() < SALE_END_DATE; // Check if the sale is still ongoing
export const DAYS_LEFT = Math.ceil((SALE_END_DATE.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)); // Days left until sale ends

// Dynamic Sale Status Message
export const SALE_STATUS = IS_SALE_ACTIVE
  ? `Sale is active. ${DAYS_LEFT} days left.`
  : 'Sale has ended.';

// You may also want to log or update these values dynamically
console.log(`Remaining tokens: ${REMAINING_SUPPLY}`);
console.log(`Sale Status: ${SALE_STATUS}`);
