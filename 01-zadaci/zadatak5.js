// Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve djeljive s 3

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function func5() {
    for (let i of arr) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

func5()