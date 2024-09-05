var isPalindrome = function(x) {
    xToString = x.toString();
    tempCheck = ''

    for (let i = xToString.length - 1; i >= 0; i--){
        tempCheck += (`${xToString[i]}`);
        
    }
    let backToNum = parseInt(tempCheck)
    if (x === backToNum) {
        console.log(`True`);
        
        return true
    } else {
        console.log(`False`);

        return false
    }
};