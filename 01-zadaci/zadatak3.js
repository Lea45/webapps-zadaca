// Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]

var func2 = function(x){
    if (x >= 100 && x <= 150000){
        console.log(x, " je unutar [100,150000]")
    } else {
        console.log(x, " nije unutar [100,150000]")
    }
}

func2(53)