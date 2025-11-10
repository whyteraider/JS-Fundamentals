const n = parseInt(process.argv[2]);

if (Number.isNaN(n)) {
  console.log("Missing number of occurrences");
} else if (n > 0) {
  let i = 0;
  let out = "";
  while (i < n) {
    out += "C is fun";
    if (i !== n - 1) out += "\n";
    i++;
  }
  console.log(out);
}

