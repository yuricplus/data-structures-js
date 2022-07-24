const items = [
    1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

const search_binary = (number) => {
    let down = 0;
    let top = items.length;
    let midle;
    let guess = 0

    while(down <= top ) {
        midle = (down + top) / 2;
        midle = Math.round(midle);
        guess = items[midle];

        if(guess === number) {
            return `Find Number ${guess}`
        }

        if(guess > number) {
            top = midle - 1;
        }

        else {
            down = midle + 1
        }
    }
    return 'Not Found'
}

console.log(
    search_binary(3)
)