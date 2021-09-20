let container = document.getElementById("container");
let ball = document.getElementById("ball");
let rod = document.getElementById("rod");
//let ballRect = ball.getBoundingClientRect();
let rodRect = rod.getBoundingClientRect();
let rodLeft = rodRect.x;
let gameOn = false;
let ballSpeedX = 10,ballSpeedY=10;

function reset() {
  rod.style.left = (window.innerWidth - rod.offsetWidth) / 2 + "px";
  ball.style.left = (window.innerWidth - ball.offsetWidth) / 2 + "px";
  gameOn = false;
};
function moveBall() {}
window.addEventListener("keydown", (Event) => {
  if (Event.keyCode == 39) {
    if (gameOn && rodLeft + rod.offsetWidth <= window.innerWidth) {
      rodLeft += 40;
     // console.log(rodLeft);
      rod.style.left = rodLeft + "px";
    }
  } else if (Event.keyCode == 37) {
    if (gameOn && rodLeft >= 0) {
      rodLeft -= 40;
      rod.style.left = rodLeft + "px";
    }
  }

  if (Event.keyCode == 38) {
    if (!gameOn) {
      gameOn = true;
      let ballRect = ball.getBoundingClientRect();
      let ballX = ballRect.x;
      let ballY = ballRect.y;
      let ballDia = ballRect.width;
      let movement = setInterval(() => {
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
        let rodY = rod.getBoundingClientRect().y;
        let ballPos = ballX + ballDia/2 ;
            
        //console.log(ballX, window.innerHeight)
        
        if (ballY + ballDia +rod.offsetHeight >= window.innerHeight) {
          ballSpeedY = (-1) * ballSpeedY;
          if (rod.getBoundingClientRect().x > ballPos||rod.getBoundingClientRect().x+rod.offsetWidth<ballPos) {
            clearInterval(movement);
            reset();
          }
        }
        else if (ballY <0) {
          ballSpeedY = (-1) * ballSpeedY;
        }

        if (ballX + ballDia >= window.innerWidth || ballX < 0) {
          ballSpeedX = (-1) * ballSpeedX;
        }
        

      }, 20);
    }
  }
});
