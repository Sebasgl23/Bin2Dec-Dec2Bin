import { bin2dec } from "./bin2dec.js";
import { dec2bin } from "./dec2bin.js"

let title = document.getElementById("title");
let number = document.getElementById("number");
let button = document.getElementById("button");
let result = document.getElementById("result");
let element = document.createElement('span');


if(title.innerHTML == "Binary to Decimal converter")
{
  button.addEventListener("click", function () {
    bin2dec(number.value);
    result.innerText = bin2dec(number.value);
  });
}

else if(title.innerHTML == "Decimal to Binary converter")
{
  button.addEventListener("click", function () {
    dec2bin(number.value);
    result.innerText = dec2bin(number.value);
  });
}
