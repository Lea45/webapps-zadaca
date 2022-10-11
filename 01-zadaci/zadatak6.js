var func6 =  function(str) {
    str = str.toLowerCase();
    var array = str.split(" ");
    for(var i =0; i< array.length ; i++){
      array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
  
    } 
     var finalString = array.join(" ")
    return finalString ; 
  }
  
