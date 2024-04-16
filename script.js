const reset = document.querySelector(".reset");
const cells = document.querySelectorAll(".grid-items");
const statusText = document.querySelector(".statusText");
let player = "X";
let playing = false;


const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let selected = ["","","","","","","","",""];

initializegame()

function initializegame(){
    cells.forEach(cell => cell.addEventListener("click",()=> cellClicked(cell,player)));
    reset.addEventListener("click",resetfun)
    statusText.textContent = `${player}'s turn`;
    playing = true;
}


function cellClicked(cell,player){
  
    
    if(!playing || selected[parseInt(cell.id)] != ""){
       
        return ;
    }else{
        
        cell.innerHTML = `<p>${player}</p>`;
        selected[parseInt(cell.id)] = player;
        checkWinner()
        changePlayer()
    }
    
    
}

function changePlayer(){
    player = (player == "X") ? "O" : "X";
    console.log(player);
}


function checkWinner(){
    let roundwon = false; 
    if(selected.includes("")){
        console.log("not yet over");
    }
    for(let i=0;i<winning.length;i++){
        let arr = winning[i];
        let cella = selected[arr[0]];
        let cellb = selected[arr[1]];
        let cellc = selected[arr[2]];

        if(cella!="" && cella == cellb && cellb == cellc){
            console.log(`over ${cella} is winner`);
            roundwon = true;
            playing = false;
            break;
        }
    }
    if(roundwon){
        statusText.textContent = `${player} Wins!`
        playing = false;
    }
    else if(!selected.includes("")){
        statusText.textContent = `Draw`
        playing = false;

    }
        
    
}



function resetfun(){
    player = "X";
    statusText.textContent = `${player}'s turn`;
    cells.forEach(cell =>  cell.innerHTML = "");
    selected = ["","","","","","","","",""];
    playing = true;
}
