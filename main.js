const parent = document.getElementById("parent");

const black = "BLACK";
const white = "WHITE";

const rook = "Rook";
const knight = "Knight";
const bishop = "Bishop";
const queen = "Queen";
const king = "King";
const pawn = "Pawn";

const path = "./assets/";
// const piecesArr = [rook, knight, bishop, queen, king];

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

    // none = 0;
    // king = 1;
    // pawn = 2;
    // knight = 3;
    // bishop = 4;
    // rook = 5;
    // queen = 6;

    // white = 8;
    // black = 16;


    constructor(piece, color, x, y) {
        this.piece = piece;
        this.color = color;
        this.x = x;
        this.y = y;
    }


}


function generateBoard() {
    let board = new Board();

    for (let y = 0; y < board.numOfRows; y++) {
        board.spaceArrs[y] = [];
        let row = document.createElement("div");

        for (let x = 0; x < board.numOfCols; x++) {
            let color;

            // determine color
            if ((x + y) % 2 == 0) color = white;
            else color = black;

            board.spaceArrs[y][x] = new Space(color, x, y);

            // Create visual representation of the space
            let space = document.createElement("div");
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

function generatePieces(fen) {
    // using FEN string rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR
    const dictionary = {
        "r": rook,
        "n": knight,
        "b": bishop,
        "q": queen,
        "k": king,
        "p": pawn
    };

    const fenBoard = fen.split(" ")[0];
    // console.log("fenBoard: ", fenBoard);
    let x = 0;
    let y = 7;

    for (let i = 0; i < fenBoard.length; i++) {
        // console.log("fenboard", fenBoard[i]);
        const character = fenBoard[i];
        if (character === "/") {
            console.log("x ", x, " and y: ", y);
            x = 0;
            y--;
        }
        else {

            // If it is not equal to NaN, that means it IS a number, so we move up by the value 
            if (character.match("[0-9]")) {
                x += parseInt(character);
            } else {
                const color = character.match("^[A-Z]*$") ? black : white;
                const pieceType = dictionary[character.toLowerCase()];

                const piece = new Piece(pieceType, color, x, y);

                let pieceImg = document.createElement("img");
                pieceImg.style.position = "absolute";
                pieceImg.style.top = (y * 100) + "px";
                pieceImg.style.left = (x * 100) + "px";
                pieceImg.src = path + color + pieceType + ".svg";

                parent.appendChild(pieceImg)

                x++;
            }
        }
    }


}

var board = generateBoard();

generatePieces("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");