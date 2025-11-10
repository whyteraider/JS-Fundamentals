const langs = ["C is fun", "Python is cool", "JavaScript is amazing"];
let i = 0;
let output = "";

while (i < langs.length) {
  output += langs[i] + "\n";
  i++;
}

output = output.slice(0, -1);
console.log(output);

