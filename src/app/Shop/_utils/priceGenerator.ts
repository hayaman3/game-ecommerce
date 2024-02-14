const priceGenerator = (title: string): string => {
  const vowels = "aeiouAEIOUyYtTnNsS";
  let totalPrice = 0;

  for (let i = 0; i < title.length; i++) {
    const currentChar = title[i];
    if (vowels.includes(currentChar)) {
      totalPrice += 3.5;
    }
  }

  if (totalPrice === 0) return "$25.50";

  return `$${totalPrice}`;
};

export default priceGenerator;
