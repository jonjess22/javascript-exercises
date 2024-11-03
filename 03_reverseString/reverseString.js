const reverseString = function(string) 
{
    let returnString = "";

    for (var i = string.length - 1; i >= 0; i--)
    {   
        returnString = returnString + string[i];
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
