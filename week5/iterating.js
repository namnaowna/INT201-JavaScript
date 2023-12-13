let letters = [..."Hello world"]
let value = ""
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) value += letter // letters at even indexes
}
console.log(`value: ${value}`) // "Hlowrd"
