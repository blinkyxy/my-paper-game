
var piecesCount=1;
const CutButton=document.getElementById("Cut");
const audio=new Audio("./assets/linhmitto-bellding-254774.mp3");
audio.volume=0.2 
const BGMusic=new Audio("./assets/Divine Registration - Zenith Tower (TETR.IO Quick Play 2 Soundtrack).mp3");
BGMusic.volume=0.3;
BGMusic.loop=true;
BGMusic.play();
const help=document.getElementById("help");
const VisualCue=document.getElementById("visualCue");
let mashCounter=0;
let waitTimeOut=null;
let holdTime=null;
let holdSuccess=false;
let Playing=false;
let moves = 0;
let VanishTimeOut= null;

Challenge = {
    AUDIO: "audio",
    VISUAL: "visual",
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
    else if (currentChallenge === Challenge.VISUAL) {
            if (VisualCue.style.display === 'block') {
                VisualCue.style.display = 'none';
                piecesCount= piecesCount * 2;
                moves = 0; // Reset moves for the next visual challenge
                clearTimeout(waitTimeOut); // Clear the timeout to prevent the visual cue from disappearing again
                clearTimeout(VanishTimeOut)
                document.getElementById("piecesCount").textContent = `Pieces Count: ${piecesCount}`;
                RandomEvent();
                document.getElementById("currentChallenge").textContent = `Current Challenge: ${currentChallenge}`;
                
            }
            else if (VisualCue.style.display === 'none') {
                window.location.href = "loose.html"; // Redirect to loose.html if the user presses the button when the visual cue is not displayed
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
        waitTimeOut = setTimeout(() => {
            audio.play();
        }, (Math.random() * 4 + 1) * 1000);
        //audio break audio break and then you have to press the button when the audio is playing
    }

    else if (currentChallenge === Challenge.VISUAL) {
        waitTimeOut = setTimeout(() => {
        VisualCue.style.position = 'absolute';
        VisualCue.style.zIndex = '1000';
        VisualCue.style.display = 'block';
        moves = Math.floor(Math.random() * 5) + 5; // Random number of moves between 5 and 10
        randomPosition();
        VanishTimeOut = setTimeout(() => {
            VisualCue.style.display = 'none';
        }, (Math.random() * 2 + 0.5)*1000); // Visual cue is displayed for a random time between 2 and 5 seconds
} , Math.random() * 2000 + 500); // Wait for a random time between 1 and 3 seconds before showing the visual cue
    }


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
}
    
        //gotta set another timer and another if saying if the button is pressed before the timer ends then you lose

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
    waitTimeOut = setTimeout(() => {
        audio.play();},(Math.random() * 2 + 1)*1000); // Play audio again after a random time between 1 and 5 seconds
    })
    
 
    function randomPosition() {
   
        if (moves <= 0) {
            return;
        }

         VisualCue.style.transform = 'scale(0)';
    VisualCue.style.transition = 'transform 0.1s ease-in'; 2

setTimeout(() => {
        // Remove the pop animation class so we can trigger it fresh
        VisualCue.classList.remove('pop-effect');

        const imageWidth = VisualCue.offsetWidth || 100; // Default width if not yet rendered
        const imageHeight = VisualCue.offsetHeight || 100; // Default height if not yet rendered

        const x = Math.floor(Math.random() * (window.innerWidth - imageWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - imageHeight));
        VisualCue.style.left = `${x}px`;
        VisualCue.style.top = `${y}px`;

        void VisualCue.offsetWidth; // Trigger reflow to restart the animation
        VisualCue.classList.add('pop-effect'); // Apply the pop animation

        moves--;

        setTimeout(randomPosition, Math.random() * 100 + 300); // Move every 0.5 to 1.5 seconds
    }, 100); // Wait for the scale down animation to finish before moving
    }
    
