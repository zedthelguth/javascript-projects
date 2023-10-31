function telephoneCheck(num) {
    const validFormat = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return validFormat.test(num);
}

console.log(telephoneCheck('1 555)555-5555'));
console.log(telephoneCheck('555-555-5555'));
console.log(telephoneCheck('1 555-555-5555'));


        
