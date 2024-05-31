const upgradeText1 = document.getElementById("upgradeText1");
const upgradeText2 = document.getElementById("upgradeText2");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const scorerText1 = document.getElementById("scorerText1");
const scorerText2 = document.getElementById("scorerText2");
const scorer1 = document.getElementById("scorer1");
const scorer2 = document.getElementById("scorer2");
const purpleBall = document.getElementById("purpleBall");
const scoreText = document.getElementById("score");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

let score = 0;
let modifyer = 1;
let price1 = 10;
let price2 = 100;

purpleBall.addEventListener("click", () => {
    score+=modifyer;
    scoreText.innerHTML = score;
});

upgrade1.addEventListener("click", () => {
    if(score >= price1) {
        score-=price1;
        modifyer*=2;
        price1*=3;
        upgradeText1.innerHTML = "buy upgrade red for " + price1 + " clicks : ";
        scoreText.innerHTML = score;
    };
});

upgrade2.addEventListener("click", () => {
    if(score >= price2) {
        score-=price2;
        modifyer*=4;
        price2*=9;
        upgradeText2.innerHTML = "buy upgrade blue for " + price2 + " clicks : ";
        scoreText.innerHTML = score;
    };
});

scorer1.addEventListener("click", () => {
    if(score >= 1000) {
        score-=1000;
        scoreText.innerHTML = score;
        scorer1.style.display = "none";
        scorerText1.style.display = "none";
        function counter(){
            score+=modifyer;
            scoreText.innerHTML = score;
            setTimeout(counter, 1200);
        }; counter();
    };
});

scorer2.addEventListener("click", () => {
    if(score >= 10000) {
        score-=10000;
        scoreText.innerHTML = score;
        scorer2.style.display = "none";
        scorerText2.style.display = "none";
        function counter(){
            score+=modifyer;
            scoreText.innerHTML = score;
            setTimeout(counter, 500);
        }; counter();
    };
});

const youDidIt = document.createElement("img");
body.appendChild(youDidIt);
youDidIt.style.width = "20vh";
youDidIt.style.height = "20vh";
youDidIt.style.position = "absolute";
youDidIt.style.top = "1vh";
youDidIt.style.right = "1vh";
youDidIt.style.borderRadius = "50%";
youDidIt.src = "Screenshot_20240510_174143_Gallery.jpg";

youDidIt.addEventListener("click", () => {
    if(score >= 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        score = Infinity;
    };
});

function loop() {
    if(score >= Infinity) {
        upgradeText1.style.display = "none";
        upgradeText2.style.display = "none";
        upgrade1.style.display = "none";
        upgrade2.style.display = "none";
        scorerText1.style.display = "none";
        scorerText2.style.display = "none";
        scorer1.style.display = "none";
        scorer2.style.display = "none";
        h1.style.display = "none";
        scoreText.style.display = "none";
        youDidIt.style.display = "none";
        purpleBall.style.marginTop = "20%";
        body.style.backgroundImage = "url('Screenshot 2024-05-10 184931.png')";
        body.style.backgroundSize = "100vw 100vh";
        document.querySelector("img").src = "RnCPjjgK_400x400.jpg"
    }
    setTimeout(loop, 100);
}; loop();