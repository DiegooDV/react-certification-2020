const splitString = (str, maxChar) => {

    if(str.length > maxChar)
    {
      return str.substring(0, maxChar) + "...";
    }
    else{
      return str;
    }
    
}

export default splitString;
