let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelectorAll(".new");
let msg = document.querySelector(".msg");

let turn0 = true;
let count = 1;

const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("count = ", count++ )
        console.log("box was clicked");
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
});


const showWinner=(Winner)=>{
    msg.innerText=`Congratulations! Winner Is ${Winner}`;
    msg.classList.remove("hide");
    disableBtn();
};

const draw=()=>{
    msg.innerText=`The Game Is Draw!!`;
    msg.classList.remove("hide");
    disableBtn();
};

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBtn=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const checkWinner=()=>{
    for(let pattern of winPattern){

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
   
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("WINNER",pos1Val);
                showWinner(pos1Val);
            }
            else{
                if(count === 10 && pos1Val != pos2Val && pos2Val != pos3Val){
                    console.log("Game Draw");
                    draw();
                }
            }
        }
    }
};

const resetGame=()=>{
    turn0 = true;
    count = 1;
    enableBtn();
    msg.classList.add("hide");
}


resetBtn.addEventListener("click", resetGame);