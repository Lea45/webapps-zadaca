// Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku rijec velikim slovom

var func6 =  function(str) {
    var a = str.split(" ");
    for(var i = 0; i < a.length ; i++){
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  
    } 
     var b = a.join("");
     console.log(b)
  }

  func6('web apps vjezbe')
  
