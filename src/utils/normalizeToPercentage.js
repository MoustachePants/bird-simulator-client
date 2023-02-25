const normalizeToPercentage = (value, maxValue, minValue) => {
  // Ensure maxValue and minValue are numbers
  if (typeof maxValue !== "number" || typeof minValue !== "number") {
    throw new Error("Max value and min value must be numbers.");
  }

  // Ensure maxValue is greater than minValue
  if (maxValue <= minValue) {
    throw new Error("Max value must be greater than min value.");
  }

  // Calculate the percentage based on the value, minValue, and maxValue
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

  // Round the percentage to 2 decimal places
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
};

export default normalizeToPercentage;
