const repeatString = function(str,num) {
    let repeatedString ="";
    while (num>0){
        repeatedString +=str;
        num--;
    }
    if (num<0){
        return "ERROR";
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
