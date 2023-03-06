let computerNum = 0;
let playButton = document.getElementById('play_button');
let userInput = document.getElementById('user_input');
let resultArea = document.getElementById('result_area');
let chanceArea = document.getElementById('chance_area');
let resetButton = document.getElementById('reset_button');
let chances = 7;
let gameOver = false;
let history=[];

function pickRandomNum(){
  computerNum =  Math.floor(Math.random()*100)+1;
  console.log("정답",computerNum);
}



playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",()=>{
  userInput.value = '';
})

function play(){
  let userValue = userInput.value;

  if(userValue <1 || userValue >100){
    resultArea.textContent = '앗! 1과 100사이의 숫자를 입력해주세요'
    return;
  }
  if(history.includes(userValue)){
    resultArea.textContent = '이미 입력한 숫자입니다 다른 숫자를 입력해주세요'
    return;
  }

  //버튼 누를때마다 1씩 줄어들기
  chances --;
  chanceArea.textContent=`남은 기회는 ${chances}번입니다`
  console.log("chances",chances);

  if( userValue < computerNum){
    resultArea.textContent = "더 높이 부르세요";
  } else if(userValue > computerNum){
    resultArea.textContent = "더 낮게 부르세요";
  } else{
    resultArea.textContent = "정답입니다!!!";
    chanceArea.textContent='';
    gameOver = true;
  }


  history.push(userValue);
  console.log(history);

  if( chances < 1){
    gameOver = true;
  }

  if(gameOver == true){
    playButton.disabled = true
  }
}

function reset(){
  userInput.value = '';
  pickRandomNum();
  gameOver = false;
  playButton.disabled = false;
  chances = 7;
  resultArea.textContent='1부터 100까지 숫자를 맞춰보세요';
  chanceArea.textContent=`남은 기회는 ${chances}번입니다`;
  history = [];
}


pickRandomNum();