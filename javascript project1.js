function palindrome(str){
    // first we remove the whitespaces, punctuations and converts all characters to lowercase 
    let reg = /[\W\s_]+/g;
    let editedStr = str.toLowerCase().replace(reg,"");
    // then we reverse the editedStr 
    let reversedStr = editedStr.split('').reverse().join('');
    // now we make a conditon for if the reversedStr is stricitly equal to the editedStr we return true otherwise we return false
    if(reversedStr === editedStr){
        return true;
    } else{
        return false;
    }
}
console.log(palindrome('eye'));
console.log(palindrome('A man, a plan, a canal._ Panama'))