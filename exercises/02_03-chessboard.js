/**
 * Write a program that creates a string that represents an 8×8 grid, using
 * newline characters to separate lines. At each position of the grid there is
 * either a space or a "#" character. The characters should form a chessboard.
 *
 * Passing this string to console.log should show something like this:
 *
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 */

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