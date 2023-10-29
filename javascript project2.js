//this a roman numeral converter
function convertToRoman(num) {
    const romanAndNumerals = { //we pair each roman numeral to its arabic numeral
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"

    };
    // we make an empty array to push our result in
    const result = [];
    // we sort the roman numerals for processing in descending order
    const sortedNumerals = Object.keys(romanAndNumerals).sort((a,b) => b-a);
    // now we iterate through sortedNumerals and convert it to roman numerals
    for (const numeral of sortedNumerals) {
        while (num >= numeral) {
            result.push(romanAndNumerals[numeral]);
            num -= numeral
        };
    } 
    return result.join('');

}
console.log(convertToRoman(89));
// console.log(convertToRoman(87889));
console.log(convertToRoman(96));