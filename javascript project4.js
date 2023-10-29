function telephoneCheck(num) {
    const validFormat = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return validFormat.test(num);
}

console.log(telephoneCheck('1 555)555-5555'));
console.log(telephoneCheck('555-555-5555'));
console.log(telephoneCheck('1 555-555-5555'));

// telephone checker
// we will be given a string lf numbers and we will have to check if they are valid USA numbers and return a boolean value
// function telephoneCheck(str) {
//     // let reg = /[^0-9]/; //make a regexp to remove non digits and we replace it.
//     // const  cleanedPhoneNumber= str.replace(reg,"");
//     // check length if it's a valid US number length
//     // if(cleanedPhoneNumber.length === 10 || (cleanedPhoneNumber.length === 11 && cleanedPhoneNumber[0].startsWith('1'))) {
//         const validFormat = /^(1\s?)?(\d{3})|\(\d{3})[\-\s]?\d{4}$/
//         return validFormat.test(str); // check if the str matches the valid format 
//     // } else{
//         // return false;
//     }
        
