// Napiši funkciju koja pretvara broj X u sate i minute

var func4 = function (x) {
    var h = Math.floor(x / 60)
    var m = x % 60
    return `Ovo je ${h} sata i ${m} minuta`
}

console.log(func4(120))