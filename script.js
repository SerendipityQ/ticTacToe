//SCROLL TO TOP AFTER REFRESH
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

//VARIABLES
const button1=document.querySelector('.choose-person-1');
const button2=document.querySelector('.choose-person-2');
var pianoSong=document.getElementById('pianoSong');
var soundIcon=document.getElementById('sound-icon');
var restartButton=document.getElementById('restart');
var random=0;
const playerXsymbol=1;
const player0symbol=0;
const squares=document.querySelectorAll('.grid div');
let win_flag=false;
let tied_flag=false;
let winner_name="none";
let history=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
let xWins=0;
let oWins=0;
let tieWins=0;
let playerDisplay=document.getElementById('player');
var xResult=document.querySelector(".X-result");
var oResult=document.querySelector(".O-result");
var tieResult=document.querySelector(".tie-result");
let remained=[];



restartButton.onclick=function(){
  for (let i = 0; i < 9; i++) {
    squares[i].classList.remove('playerX');
    squares[i].classList.remove('player0');
    squares[i].classList.remove('horizontal');
  squares[i].classList.remove('vertical');
   squares[i].classList.remove('right_diagonal');
  squares[i].classList.remove('left_diagonal');
    }
  playerDisplay.innerHTML="X's Turn";
  xResult.innerHTML='0';
  oResult.innerHTML='0';
  tieResult.innerHTML='0';
  history=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
  win_flag=0;
  tied_flag=0;
  xWins=0;
  tieWins=0;
}





soundIcon.onclick=function(){
  if(pianoSong.paused){
  pianoSong.play();
  soundIcon.src='style/soundOn.png';
}else{
  pianoSong.pause();
  soundIcon.src="style/soundOff.png";
}
}


//TIC TAC TOE 1 PERSON
button1.onclick=function(){
  pianoSong.play();
  soundIcon.src='style/soundOn.png';

  Array.from(squares).forEach(function(square){
    square.addEventListener('click',clickOutcome);
  });

  function clickOutcome(event){
    const mysquares=Array.from(squares);
    const index=mysquares.indexOf(event.target);

    if((win_flag==false)&&(tied_flag==false)){
      if(history[index]== -1){
        if (playerDisplay.innerHTML=="X's Turn"){
          squares[index].classList.add('playerX');
          playerDisplay.innerHTML="O's Turn";
          history[index]=playerXsymbol;
          checkWinner(playerXsymbol);
          remainedArray();
          AImove();
        }
      }
      setTimeout(reset,5000);
    }
  }

//Creating an array that stores
//the positions of the remaining free squares
  function remainedArray(){
    let m=0;
    remained=[];
    for(let i=0;i<8;i++){
      if(history[i]==-1){
        remained[m]=i;
        m=m+1;
      }
    }
  }


  function AImove(){

      //TRYING TO WIN MOVES-0 SYMBOL
      if((history[1]==player0symbol)&&(history[2]==player0symbol)){
          random=0;
        }

        if((history[0]==player0symbol)&&(history[2]==player0symbol)){
          random=1;
        }
        if((history[0]==player0symbol)&&(history[1]==player0symbol)){
          random=2;
        }

        if((history[4]==player0symbol)&&(history[5]==player0symbol)){
          random=3;
        }

        if((history[3]==player0symbol)&&(history[5]==player0symbol)){
          random=4;
        }
        if((history[3]==player0symbol)&&(history[4]==player0symbol)){
          random=5;
        }

        if((history[7]==player0symbol)&&(history[8]==player0symbol)){
          random=6;
        }

        if((history[6]==player0symbol)&&(history[8]==player0symbol)){
          random=7;
        }
        if((history[6]==player0symbol)&&(history[7]==player0symbol)){
          random=8;
        }

        if((history[3]==player0symbol)&&(history[6]==player0symbol)){
          random=0;
        }

        if((history[6]==player0symbol)&&(history[0]==player0symbol)){
          random=3;
        }
        if((history[0]==player0symbol)&&(history[3]==player0symbol)){
          random=6;
        }

        if((history[4]==player0symbol)&&(history[7]==player0symbol)){
          random=1;
        }

        if((history[1]==player0symbol)&&(history[7]==player0symbol)){
          random=4;
        }
        if((history[1]==player0symbol)&&(history[4]==player0symbol)){
          random=7;
        }

        if((history[5]==player0symbol)&&(history[8]==player0symbol)){
          random=2;
        }

        if((history[2]==player0symbol)&&(history[8]==player0symbol)){
          random=5;
        }
        if((history[2]==player0symbol)&&(history[5]==player0symbol)){
          random=8;
        }

        if((history[4]==player0symbol)&&(history[8]==player0symbol)){
          random=0;
        }

        if((history[0]==player0symbol)&&(history[8]==player0symbol)){
          random=4;
        }
        if((history[0]==player0symbol)&&(history[4]==player0symbol)){
          random=8;
        }

        if((history[4]==player0symbol)&&(history[6]==player0symbol)){
          random=2;
        }

        if((history[6]==player0symbol)&&(history[2]==player0symbol)){
          random=4;
        }
        if((history[2]==player0symbol)&&(history[4]==player0symbol)){
          random=6;
        }


        //DEFENSIVE MOVES XSymbol

        if((history[1]==playerXsymbol)&&(history[2]==playerXsymbol)){
            random=0;
          }

          if((history[0]==playerXsymbol)&&(history[2]==playerXsymbol)){
            random=1;
          }
          if((history[0]==playerXsymbol)&&(history[1]==playerXsymbol)){
            random=2;
          }

          if((history[4]==playerXsymbol)&&(history[5]==playerXsymbol)){
            random=3;
          }

          if((history[3]==playerXsymbol)&&(history[5]==playerXsymbol)){
            random=4;
          }
          if((history[3]==playerXsymbol)&&(history[4]==playerXsymbol)){
            random=5;
          }

          if((history[7]==playerXsymbol)&&(history[8]==playerXsymbol)){
            random=6;
          }

          if((history[6]==playerXsymbol)&&(history[8]==playerXsymbol)){
            random=7;
          }
          if((history[6]==playerXsymbol)&&(history[7]==playerXsymbol)){
            random=8;
          }

          if((history[3]==playerXsymbol)&&(history[6]==playerXsymbol)){
            random=0;
          }

          if((history[6]==playerXsymbol)&&(history[0]==playerXsymbol)){
            random=3;
          }
          if((history[0]==playerXsymbol)&&(history[3]==playerXsymbol)){
            random=6;
          }

          if((history[4]==playerXsymbol)&&(history[7]==playerXsymbol)){
            random=1;
          }

          if((history[1]==playerXsymbol)&&(history[7]==playerXsymbol)){
            random=4;
          }
          if((history[1]==playerXsymbol)&&(history[4]==playerXsymbol)){
            random=7;
          }

          if((history[5]==playerXsymbol)&&(history[8]==playerXsymbol)){
            random=2;
          }

          if((history[2]==playerXsymbol)&&(history[8]==playerXsymbol)){
            random=5;
          }
          if((history[2]==playerXsymbol)&&(history[5]==playerXsymbol)){
            random=8;
          }

          if((history[4]==playerXsymbol)&&(history[8]==playerXsymbol)){
            random=0;
          }

          if((history[0]==playerXsymbol)&&(history[8]==playerXsymbol)){
            random=4;
          }
          if((history[0]==playerXsymbol)&&(history[4]==playerXsymbol)){
            random=8;
          }

          if((history[4]==playerXsymbol)&&(history[6]==playerXsymbol)){
            random=2;
          }

          if((history[6]==playerXsymbol)&&(history[2]==playerXsymbol)){
            random=4;
          }
          if((history[2]==playerXsymbol)&&(history[4]==playerXsymbol)){
            random=6;
          }


      if(history[random]!=-1){
        random=remained[Math.floor(Math.random()*remained.length)];
      }

  if((win_flag==false)&&(tied_flag==false)){
            squares[random].classList.add('player0');
            playerDisplay.innerHTML="X's Turn";
            history[random]=player0symbol;
            checkWinner(player0symbol);
      }
    };
}




//function bestMove(symbol){

//}


//Tic Tac Toe 2 PEOPLE //
button2.onclick=function(){
  pianoSong.play();

  Array.from(squares).forEach(function(square){
    square.addEventListener('click',clickOutcome);
  });

  function clickOutcome(event){
    const mysquares=Array.from(squares);
    const index=mysquares.indexOf(event.target);

    if((win_flag==false)&&(tied_flag==false)){
      if(history[index]== -1){
        if (playerDisplay.innerHTML=="X's Turn"){
          squares[index].classList.add('playerX');
          playerDisplay.innerHTML="O's Turn";
          history[index]=playerXsymbol;
          checkWinner(playerXsymbol);
        }
        else{
          squares[index].classList.add('player0');
          playerDisplay.innerHTML="X's Turn";
            history[index]=player0symbol;
            checkWinner(player0symbol);
        }
      }
      setTimeout(reset,4500);
    }

  }
}

  function checkWinner(symbol){
    if(((history[0]==symbol)&&(history[1]==symbol)&&(history[2]==symbol))||
    ((history[3]==symbol)&&(history[4]==symbol)&&(history[5]==symbol))||
    ((history[6]==symbol)&&(history[7]==symbol)&&(history[8]==symbol))||
    ((history[0]==symbol)&&(history[3]==symbol)&&(history[6]==symbol))||
    ((history[1]==symbol)&&(history[4]==symbol)&&(history[7]==symbol))||
    ((history[2]==symbol)&&(history[5]==symbol)&&(history[8]==symbol))||
    ((history[0]==symbol)&&(history[4]==symbol)&&(history[8]==symbol))||
    ((history[2]==symbol)&&(history[4]==symbol)&&(history[6]==symbol))){

      //horizontal lines
      if((history[0]==symbol)&&(history[1]==symbol)&&(history[2]==symbol)){
        squares[0].classList.add('horizontal');
        squares[1].classList.add('horizontal');
        squares[2].classList.add('horizontal');
      }

      else if((history[3]==symbol)&&(history[4]==symbol)&&(history[5]==symbol)){
        squares[3].classList.add('horizontal');
        squares[4].classList.add('horizontal');
        squares[5].classList.add('horizontal');
      }
      if((history[6]==symbol)&&(history[7]==symbol)&&(history[8]==symbol)){
        squares[6].classList.add('horizontal');
        squares[7].classList.add('horizontal');
        squares[8].classList.add('horizontal');
      }

      //vertical lines
      if((history[0]==symbol)&&(history[3]==symbol)&&(history[6]==symbol)){
        squares[0].classList.add('vertical');
        squares[3].classList.add('vertical');
        squares[6].classList.add('vertical');
      }

      else if((history[1]==symbol)&&(history[4]==symbol)&&(history[7]==symbol)){
        squares[1].classList.add('vertical');
        squares[4].classList.add('vertical');
        squares[7].classList.add('vertical');
      }
      if((history[2]==symbol)&&(history[5]==symbol)&&(history[8]==symbol)){
        squares[2].classList.add('vertical');
        squares[5].classList.add('vertical');
        squares[8].classList.add('vertical');
      }

      //diagonals
      if((history[0]==symbol)&&(history[4]==symbol)&&(history[8]==symbol)){
        squares[0].classList.add('right_diagonal');
        squares[4].classList.add('right_diagonal');
        squares[8].classList.add('right_diagonal');
      }

      if((history[2]==symbol)&&(history[4]==symbol)&&(history[6]==symbol)){
        squares[2].classList.add('left_diagonal');
        squares[4].classList.add('left_diagonal');
        squares[6].classList.add('left_diagonal');
      }

      setWinner(symbol);
    }
    else if((history[0]!=-1)&&(history[1]!=-1)&&(history[2]!=-1)&&(history[3]!=-1)&&
    (history[4]!=-1)&&(history[5]!=-1)&&(history[6]!=-1)&&(history[7]!=-1)&&(history[8]!=-1)&&(history[9]!=-1)){
      tied_flag=true;
      tieWins=tieWins+1;
      tieResult.innerHTML=`${tieWins}`;
    }
  }

  function setWinner(symbol){
    if (symbol==playerXsymbol){
      xWins=xWins+1;
      xResult.innerHTML=`${xWins}`;
    }
    else{
      oWins=oWins+1;
      oResult.innerHTML=`${oWins}`;
    }
    win_flag=true;
  }

  function reset(){
    if(win_flag==true || tied_flag==true){
      playerDisplay.innerHTML="X's Turn";
      history=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
      win_flag=false;
      tied_flag=false;
      for (let i = 0; i < 9; i++) {
        squares[i].classList.remove('playerX');
        squares[i].classList.remove('player0');
        squares[i].classList.remove('horizontal');
      squares[i].classList.remove('vertical');
       squares[i].classList.remove('right_diagonal');
      squares[i].classList.remove('left_diagonal');
        }
    }
  }
