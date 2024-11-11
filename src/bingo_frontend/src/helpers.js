export function getRandomWeight(min = 10, max = 1000000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getAmountFromWeight(weightInGrams) {
  const ratePerKg = 5; // Example rate: $5 per kg
  const weightInKg = weightInGrams / 1000;
  return Math.round(weightInKg * ratePerKg * 100) / 100; // Rounding to 2 decimal places
}

export function generateWeightAndAmount() {
  const weight = getRandomWeight();
  const amount = getAmountFromWeight(weight);
  return { weight, amount };
}
