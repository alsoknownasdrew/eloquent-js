const size = 24;
let board = "";

for (let rowCount = 1; rowCount <= size; rowCount++) {

    for (let columnCount = 1; columnCount <= size; columnCount++) {
        if ((rowCount + columnCount) % 2 == 0) {
            board += '#';
        }
        else {
            board += " ";
        }
    }

    board += "\n";
}

console.log(board);
