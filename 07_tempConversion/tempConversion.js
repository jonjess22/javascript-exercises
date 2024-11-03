const convertToCelsius = function(temp) 
{
  if (Number.isFinite(temp))
  {
    temp = parseFloat(((temp - 32) * 5/9).toFixed(1));

    if (temp % 1 === 0)
    {
      return Math.round(temp);
    }
    else
    {
      return temp;
    }
  }
  else
  {
    return "ERROR";
  }
};

const convertToFahrenheit = function(temp) 
{
  if (Number.isFinite(temp))
  {
    temp = parseFloat((temp * 9/5 + 32).toFixed(1));
  
    if (temp % 1 === 0)
    {
      return Math.round(temp);
    }
    else
    {
      return temp;
    }
  }
  
  else
  {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
