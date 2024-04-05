let symbol=["X","O"];
const boxes=document.querySelectorAll(".box");
let index=0;
let isFinished=false;

function putText(event){
    if(event.target.innerText=="" && isFinished==false){
        event.target.innerText=symbol[index];
        index++;
    }

    if(index>=symbol.length){
        index=0;
    }
    updateArr();
    let returnType=checkWin(elementsInArr);  

    if(returnType=='X' || returnType=='O'){
        if(returnType=='X'){
            displayMsg('Game Over : '+"X"+' won the game. Refresh to play again');
        }
        if(returnType=='O'){
            displayMsg('Game Over : '+"O"+' won the game. Refresh to play again');
        }
        
        isFinished=true;
    }

    else if(returnType=='draw'){
        displayMsg('game is draw please refresh ');
    }
}


boxes.forEach(box => {
    box.addEventListener("click", putText);
});

let elementsInArr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

function updateArr(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const boxId = `cell${i}${j}`;
          const boxContent = document.getElementById(boxId).textContent;
          elementsInArr[i][j] = boxContent;
        }
    }
  }


function checkWin(arr){
    // check horizontal 
    for(let i=0;i<3;i++){
        if(arr[i][0]=='X' && arr[i][1]=='X' && arr[i][2] =='X'){
            return 'X';
        }
        if(arr[i][0]=='O' && arr[i][1]=='O' && arr[i][2] =='O'){
            return 'O';
        }
    }
    // check vertical
    for(let i=0;i<3;i++){
        if(arr[0][i]=='X' && arr[1][i]=='X' && arr[2][i] =='X'){
            return 'X';
        }
        if(arr[0][i]=='O' && arr[1][i]=='O' && arr[2][i] =='O'){
            return 'O';
        }
    }
    // check diagonally from first
    if(arr[0][0]=='X' && arr[1][1]=='X' && arr[2][2] =='X'){
        return 'X';
    }
    if(arr[0][0]=='O' && arr[1][1]=='O' && arr[2][2] =='O'){
        return 'O';
    }
    // check diagonally from last
    if(arr[0][2]=='X' && arr[1][1]=='X' && arr[2][0]=='X'){
        return 'X';
    }
    if(arr[0][2]=='O' && arr[1][1]=='O' && arr[2][0]=='O'){
        return 'O';
    }
    let draw=true;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(arr[i][j]==''){
                draw=false;
            }
        }
    }
    if(draw==true){
        return 'draw';
    }
    else{
        return null;
    }
}
let text=document.querySelector('.win-text');


function displayMsg(msg){
    text.innerText=msg;
}
