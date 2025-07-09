/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];


/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetBtnEl = document.querySelector("#reset");

/*-------------------------------- Functions --------------------------------*/
function init()
{
    board = ["", "", "",
             "", "", "", 
             "", "", "" ];
    turn = "X";
    winner = false;
    tie = false;

    render();
}

function updateBoard()
{
    for(let i = 0; i < board.length; i++)
    {
        squareEls.forEach(() => 
        {
            squareEls[i].textContent = board[i];
        });
    }
}

function updateMessage()
{
    if(tie == true && winner == false)
    {
        messageEl.textContent = `Tie game!`;
    }
    else if(winner)
    {
        messageEl.textContent = `${turn} wins!`;
    }
    else
    {
        messageEl.textContent = `it's ${turn}'s turn`;
    }
}

function render()
{
    updateBoard();
    updateMessage();
}

function handleClick(event)
{
    const squareIndex = event.id;

    if(board[squareIndex] != "")
    {
        return;
    }

    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
}

function placePiece(index)
{
    if(winner) return;

    board[index] = turn;
}

function checkForWinner()
{
    winningCombos.forEach(combo => 
    {
        if(board[combo[0]] !== "" &&
           board[combo[0]] === board[combo[1]] &&
           board[combo[0]] === board[combo[2]])
        {
            winner = true;
        }
    });
}

function checkForTie()
{
    if(winner) return;

    if(board.some(x => x == ""))
    {
        tie = false;
    }
    else
    {
        tie = true;
    }
}

function switchPlayerTurn()
{
    if(winner == false)
    {
        if(turn == "X")
        {
            turn = "O";
        }
        else
        {
            turn = "X"
        }
    }
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);
squareEls.forEach((event) => 
{
    event.addEventListener('click', () => {
        handleClick(event);
        
    });
});
resetBtnEl.addEventListener('click', init);