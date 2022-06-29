const parent = document.getElementById("parent");

const black = "BLACK";
const white = "WHITE";

class Board {




    constructor() {
        this.spaceArrs = [];
        this.numOfRows = 8;
        this.numOfCols = 8;
    }


}


class Space {


    constructor(color, x, y) {
        this.color = color;     // white or black
        this.x = x;             // start from top left
        this.y = y;             //
    }

}



class Piece {


}


function generateBoard() {
    let board = new Board();

    for (let y = 0; y < board.numOfRows; y++) {
        board.spaceArrs[y] = [];
        let row = document.createElement("tr");

        for (let x = 0; x < board.numOfCols; x++) {
            let color;

            // determine color
            if ((x + y) % 2 == 0) color = white;
            else color = black;

            board.spaceArrs[y][x] = new Space(color, x, y);

            // Create visual representation of the space
            let space = document.createElement("td");
            space.style.backgroundColor = color;
            space.style.height = "100px";
            space.style.width = "100px";
            space.style.display = "inline-block";
            row.appendChild(space);
        }
        parent.appendChild(row);
    }

    return board;
}

var board = generateBoard();

