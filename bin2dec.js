export function bin2dec(bin) {
  let result = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == 0 || bin[i] == 1) {
      continue;
    } else {
      return "Please insert an valid binary number, only 0 and 1 are allowed";
    }
  }

  let actualCharacter = 0;
  let counter = 1;

  for (let i = 0; i < bin.length; i++) {
    if (i != 0) {
      counter = counter * 2;
    }
    actualCharacter = bin[bin.length - i - 1];

    if (actualCharacter == 1) {
      if (i == 0) {
        result += counter;
      } else {
        result += counter;
      }
    }
  }

  return `The result of the convertion of the binary ${bin} to decimal is: ${result}`;
}
