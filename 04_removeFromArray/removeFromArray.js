const removeFromArray = function(array, ...args) 
{
    if (!Array.isArray(array))
    {
        throw new Error("First argument must be an array.");
    }
    
    let filteredArray = array;

    for (var i = 0; i < args.length; i++)
    {
        for (var j = 0; j < array.length; j++)
        {
            if (array[j] === args[i] && typeof array[j] === typeof args[i])
            {
                filteredArray = filteredArray.filter((item) => item != args[i]);
            }
        }
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;