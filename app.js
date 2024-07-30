let boxes = document.querySelectorAll(".boxes");
let resetGame = document.querySelector(".reset");
let winnermessage = document.querySelector(".winmeg");
function disabledBtn(){
    for(let box of boxes){
        box.disabled = true;
    }
};

function enabledBtn(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    winnermessage.classList.add("hidden");
}

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function checkWinner(){
    for (patter of winPatterns){
        let pos1Val = boxes[patter[0]].innerText;
        let pos2Val = boxes[patter[1]].innerText;
        let pos3Val = boxes[patter[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                winnermessage.classList.remove("hidden");
                winnermessage.innerText = `Winner is ${pos1Val}`;
                console.log(`winner is ${pos1Val}`);
                disabledBtn();
            }
        }   
    }
}

let turn = "o";
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn=="o"){
            box.innerText = "X";
            turn="x";
        }
        else{
            box.innerText = "O";
            turn="o";
        }
        box.disabled = true;
        checkWinner();
    })
})

// reset Game;
resetGame.addEventListener("click",enabledBtn);