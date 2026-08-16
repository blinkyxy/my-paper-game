
var piecesCount=1;
const CutButton=document.getElementById("Cut");
const audio=new Audio("./assets/bump.mp3");
const help=document.getElementById("help");
let mashCounter=0;
let waitTimeOut=null;
let holdTime=null;
let holdSuccess=false;
let Playing=false;

Challenge = {
    AUDIO: "audio",
   // VISUAL: "visual",
    MASH: "mash the button",
    HOLD: "hold",
    DONT: "dont press anything",
    NULL: "press whenever you want",
}
let currentChallenge=Challenge.NULL;


CutButton.addEventListener("click", ()=>{
    document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
     if (currentChallenge===Challenge.MASH){
        mashCounter+=1;
        document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}, Mash Counter: ${mashCounter}`;
        if (mashCounter == 5) {
            clearTimeout(waitTimeOut);
            piecesCount= piecesCount * 2;
            document.getElementById("piecesCount").textContent = `Pieces Count: ${piecesCount}`;
            RandomEvent();
            document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
            
        }
        
    }
    else if (currentChallenge === Challenge.AUDIO) {
        if (Playing==true){
            piecesCount= piecesCount * 2;
            document.getElementById("piecesCount").textContent = `Pieces Count: ${piecesCount}`;
            RandomEvent();
            document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
            audio.currentTime = 0;
            audio.pause();
            Playing=false;
        }
        else if (Playing==false){ 
            window.location.href = "loose.html"; // Redirect to loose.html if the user presses the button when the audio is not playing
        }
    }

    else if (currentChallenge === Challenge.DONT) {
        window.location.href = "loose.html"; // Redirect to loose.html if the user presses the button during the DONT challenge
    }
    else if (currentChallenge === Challenge.NULL) {
        piecesCount= piecesCount * 2;
        document.getElementById("piecesCount").textContent = `Pieces Count: ${piecesCount}`;
        document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
    RandomEvent(); 
    document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
    }
});






function RandomEvent(){
const ChallengeList=Object.values(Challenge);
const randomIndex = Math.floor(Math.random()*ChallengeList.length);
currentChallenge=ChallengeList[randomIndex];
runEvent();
}

function runEvent() {
    if (currentChallenge === Challenge.AUDIO) {
        // Play audio cue after a random time between 1 and 5 seconds
        WaitTimeOut = setTimeout(() => {
            audio.play();
        }, (Math.random() * 4 + 1) * 1000);
        //audio break audio break and then you have to press the button when the audio is playing
    }

    /*else if (currentChallenge === Challenge.VISUAL) {
        // Show visual cue
        visualCue.style.display = 'block';
    }*/

     if (currentChallenge === Challenge.MASH) {
        mashCounter = 0;
        waitTimeOut = setTimeout(() => {
        window.location.href = "loose.html"; // Redirect to loose.html if the user doesn't mash enough times
        }, 5000); // 5 seconds to mash the button
    }   

    else if (currentChallenge === Challenge.DONT) {
    document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}, Wait for 2 seconds without pressing the button!`;
        waitTimeOut = setTimeout(() => { 
            piecesCount= piecesCount * 2;
            document.getElementById("piecesCount").textContent = `Pieces Count: ${piecesCount}`;
            RandomEvent();
            document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
        }, 2000); // 2 seconds to wait for the button
    }
    
    
        //gotta set another timer and another if saying if the button is pressed before the timer ends then you lose
}

         CutButton.addEventListener("mousedown", ()=>{
    if (currentChallenge === Challenge.HOLD) {
        holdTime = setTimeout(() => {
            holdSuccess = true;
            piecesCount= piecesCount * 2;
            document.getElementById("piecesCount").textContent = `Pieces Count: ${piecesCount}`;
        }, 500); // 1.5 seconds to hold the button
    }})
     CutButton.addEventListener("mouseup", ()=>{
    if (currentChallenge === Challenge.HOLD && holdSuccess === false) {
        clearTimeout(holdTime);
        window.location.href = "loose.html"; // Redirect to loose.html if the user doesn't hold the button long enough
    }
    else if (currentChallenge === Challenge.HOLD && holdSuccess  === true) {
        holdSuccess = false;
        setTimeout(() => {
            RandomEvent();
            document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
            clearTimeout(holdTime);
        }, 50); // 0.5 seconds before starting the next challenge
    }})

    audio.addEventListener("play", () => {
    Playing=true;
    })

audio.addEventListener("ended", () => {
    Playing=false;
    audio.currentTime=0;
    WaitTimeOut = setTimeout(() => {
        audio.play();},(Math.random() * 2 + 1)*1000); // Play audio again after a random time between 1 and 5 seconds
    })
