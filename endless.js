
const CutButton=GetElementById("Cut")
const audio=new audio("./assets/situational sfx")
const help=GetElementById("help")

CutButton.addeventlistener(click, ()=>{
    if (currentChallenge===MASH)
        mashCounter+=1;

    else
    piecesCount= piecesCount*2

    ButtonPress();
}
);
const Challenge = {
AUDIO="",
VISUAL="",
MASH="",
HOLD="",
DONT="",
}
let currentChallenge=null;
let mashCounter=0;
let waitTimeOut=null;
let holdTime=null;

function RandomComand(){
clearTimeout(waitTimeOut)
clearTimeout(holdTime)
mashCounter=0;

const ChallengeList=Object.values(Challenge);
const randomIndex = Math.floor(math.random()*ChallengeList.lenght);
currentChallenge=ChallengeList[randomIndex];
}

function ButtonPress() {
    switch (currentChallenge){

        case Challenge.AUDIO://vissual
        if(press ("Button")&&!audio.paused && audio.currentTime>0) {
            console.log("its playing something, you pass")
            RandomComand();
}
        else {
            window.location.href="end html";
}

        case Challenge.DONT:
            waitTimeOut=setTimeout(()=>{
            },3000);
            if(button ("press") && waitTimeOut>setTimeout){
                console.log("You waited enough")
                RandomComand()
            }
            else{

            }
        
        case Challenge.HOLD:
            holdTime=setTimeout(() =>{
            }, 2000);
        
            if(holdTime>=setTimeout){
                console.log("you held enough")
                RandomComand();
            }
            else if(holdTime!=0 && holdTime<setTimeout){
                window.location.href="end.html"
            }

            case Challenge.MASH:
                waitTimeOut=setTimeout(()=>{
                },5000);
                if(press ("button"))
                  mashCounter++
                    if(MashCounter>=10 && waitTimeOut<setTimeout)
                        console.log("you mashed enough times")
                    else window.location.href="end.html"  
    }




}




