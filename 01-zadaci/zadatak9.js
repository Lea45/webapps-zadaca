// Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve vraća true

var p1 = {a: 1, b: 2, c: 3}
var p2 = {a: 321, b: 3, c: 1}

var func9 = function (p1, p2){
    if(Object.keys(p1).length == Object.keys(p2).length && Object.keys(p1).every(k => p2.hasOwnProperty(k))){
        return true 
    } 
    else {
        return false
    }
}

console.log(func9(p1, p2))