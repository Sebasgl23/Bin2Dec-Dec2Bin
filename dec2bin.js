export function dec2bin(decimal) {
  let result = [];
  let number = decimal
  for (let i = 0; i < decimal.length; i++) {
    if (
      decimal[i] == 0 ||
      decimal[i] == 1 ||
      decimal[i] == 2 ||
      decimal[i] == 3 ||
      decimal[i] == 4 ||
      decimal[i] == 5 ||
      decimal[i] == 6 ||
      decimal[i] == 7 ||
      decimal[i] == 8 ||
      decimal[i] == 9
    ) {
      continue;
    } else {
      return "Please insert an valid binary number, only 0 and 1 are allowed";
    }
  }

  do {
    result.push(number % 2);
    number = Math.trunc(number / 2);
  } while (number != 0);

  result = result.reverse().join("");
  return `The result of the convertion of the decimal ${decimal} to binary is: ${result}`;
}
