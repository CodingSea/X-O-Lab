/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
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


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");

/*-------------------------------- Functions --------------------------------*/
function init()
{
    board = ["X", "O", "",
                "", "X", "", 
                "", "O", "X"];
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
    if(tie && winner == false)
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
    console.log(squareIndex);
}

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);
squareEls.forEach((event) => 
{
    event.addEventListener('click', () => {
        handleClick(event.target);
    })
});