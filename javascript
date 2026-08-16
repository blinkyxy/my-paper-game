const button=document.getElementById('cutButton');
var piecesCount=1;
var audio= new Audio('./assets/paper ripping.mp3');
const resetButton = document.getElementById('resetButton');

button.addEventListener('click', () => {
piecesCount = piecesCount * 2;
document.getElementById('pieces').textContent = `Number of pieces: ${piecesCount}`;
audio.currentTime = 0; // Reset audio to the beginning  
audio.play();
updateImages();
//getRandomImages();
});

/*const imagePool = [
    'silly1.jpg',
    'silly2.jpg',
    'silly3.jpg',
    'silly4.jpg',
    'silly5.jpg',
    'silly6.jpg',
    'silly7.jpg',
    'silly8.jpg',
    'silly9.jpg',
    'silly10.jpg'
];

function getRandomImages() {
    const randomIndex = Math.floor(Math.random() * imagePool.length);
    return imagePool[randomIndex]; 
}*/

function updateImages() {
    const gameImage= {
        slot1: document.getElementById('slot-1'),
        slot2: document.getElementById('slot-2'),
        slot3: document.getElementById('slot-3'),
        slot4: document.getElementById('slot-4'),
        middleSlotblyatt: document.getElementById('middle-slot'),
    }



if (piecesCount === 1) {
    gameImage.middleSlotblyatt.src = "./assets/paper-48274.jpg";
    gameImage.slot1.style.display = 'none';
    gameImage.slot2.style.display = 'none';
    gameImage.slot3.style.display = 'none';
    gameImage.slot4.style.display = 'none';
    gameImage.middleSlotblyatt.style.display = 'block';
    gameImage.middleSlotblyatt.style.height='300px';
    gameImage.middleSlotblyatt.style.width='max-content';


    document.getElementById('commentary').textContent = "You have one piece of paper.";
}
else if (piecesCount === 2) {
    gameImage.slot2.src = "./assets/paper-48274.jpg";
    gameImage.slot3.src = "./assets/paper-48274.jpg";

    gameImage.slot2.style.display = 'block';
    gameImage.slot3.style.display = 'block';
    gameImage.slot1.style.display = 'none';
    gameImage.slot4.style.display = 'none';
    gameImage.middleSlotblyatt.style.display = 'none';
    document.getElementById("click").style.display='none';

    document.getElementById('commentary').textContent = "You have two pieces of paper. half them again!.";

}
else if (piecesCount === 4) {
    gameImage.slot1.src = "./assets/paper-48274.jpg";
    gameImage.slot2.src = "./assets/paper-48274.jpg";
    gameImage.slot3.src = "./assets/paper-48274.jpg";
    gameImage.slot4.src = "./assets/paper-48274.jpg";

    gameImage.slot1.style.display = 'block';
    gameImage.slot2.style.display = 'block';
    gameImage.slot3.style.display = 'block';
    gameImage.slot4.style.display = 'block';
    gameImage.middleSlotblyatt.style.display = 'none';

    document.getElementById('commentary').textContent = "You have 4 pieces of paper. yup, AGAIN! :]";
}
else if (piecesCount === 8) {
    gameImage.slot1.style.display = 'none';
    gameImage.slot2.style.display = 'block';
    gameImage.slot3.style.display = 'block';
    gameImage.slot4.style.display = 'none';
    
    gameImage.slot2.src = "./assets/batch of papers(4).jpg";
    gameImage.slot3.src = "./assets/batch of papers(4).jpg";

    document.getElementById('commentary').textContent = "You have 8 pieces of paper. You could've ripped them straight you know.";
}
else if (piecesCount === 16) {
    gameImage.slot4.src = "./assets/batch of papers(4).jpg";
    gameImage.slot1.src = "./assets/batch of papers(4).jpg";
    gameImage.slot2.src = "./assets/batch of papers(4).jpg";
    gameImage.slot3.src = "./assets/batch of papers(4).jpg";

    gameImage.slot1.style.display = 'block';
    gameImage.slot2.style.display = 'block';
    gameImage.slot3.style.display = 'block';
    gameImage.slot4.style.display = 'block';

    document.getElementById('commentary').textContent = "You have 16 pieces of paper. theyre adding up!.";
    
}
else if (piecesCount === 32) {
    gameImage.slot2.src = "./assets/batch of papers(16).jpg";
    gameImage.slot3.src = "./assets/batch of papers(16).jpg";

    gameImage.slot1.style.display = 'none';
    gameImage.slot2.style.display = 'block';
    gameImage.slot3.style.display = 'block';
    gameImage.slot4.style.display = 'none';

    document.getElementById('commentary').textContent = "You have 32 pieces of paper. you could stop, i think they fit in the trash.";
}
else if (piecesCount === 64) {
    gameImage.slot1.src = "./assets/batch of papers(16).jpg";
    gameImage.slot2.src = "./assets/batch of papers(16).jpg";
    gameImage.slot3.src = "./assets/batch of papers(16).jpg";
    gameImage.slot4.src = "./assets/batch of papers(16).jpg";

    gameImage.slot1.style.display = 'block';
    gameImage.slot2.style.display = 'block';
    gameImage.slot3.style.display = 'block';
    gameImage.slot4.style.display = 'block';

    document.getElementById('commentary').textContent = "You have 64 pieces of paper. A minecraft stack (-_-).";
}
else if (piecesCount === 128) {
    gameImage.middleSlotblyatt.src = "./assets/big paper pieces.png";

    gameImage.slot1.style.display = 'none';
    gameImage.slot2.style.display = 'none';
    gameImage.slot3.style.display = 'none';
    gameImage.slot4.style.display = 'none';
    gameImage.middleSlotblyatt.style.display = 'block';

    document.getElementById('commentary').textContent = "You have 128 pieces of paper. That's a lot!";
}
else if (piecesCount === 256) {
    gameImage.middleSlotblyatt.src = "./assets/ignore the top text.jpg ";
    document.getElementById('commentary').textContent = "You have 256 pieces of paper. What are you going to do with all this paper???";
}
else if (piecesCount === 512) {
    gameImage.middleSlotblyatt.src = "./assets/floor of papers.png";
    document.getElementById('commentary').textContent = "You have 512 pieces of paper. I CANT EVEN COUNT THEM, THEY'RE TOO TINY!";
}
else if(piecesCount === 1024) {
    gameImage.middleSlotblyatt.src = "./assets/images.png";
    document.getElementById('commentary').textContent = "You have 1024 pieces of paper. Are you enjoying this?";
}
else if(piecesCount === 2048) {
    gameImage.middleSlotblyatt.src = "./assets/shreded paper.jpeg";
    document.getElementById('commentary').textContent = "You have 2048 pieces of paper. You wont be able to use all this for anything you know";
}
else if(piecesCount === 4096) {
    gameImage.middleSlotblyatt.src = "./assets/start tornado.png";
    document.getElementById('commentary').textContent = "You have 4096 pieces of paper. This cant be healthy...";
}
else if(piecesCount === 8192) {
    gameImage.middleSlotblyatt.src = "./assets/paper tornado.png";
    document.getElementById('commentary').textContent = "You have 8192 pieces of paper. GO OUTSIDE PLAYER, JUST STOP!!! YOU ARE FORMING TORNADOS";
}
else if(piecesCount === 16384) {
    gameImage.middleSlotblyatt.src = "./assets/stanley parable joke.png";
    document.getElementById('commentary').textContent = "You have 16384 pieces of paper. Big shoutout to my role model, the stanley parable narator... You're still going? Oh well. (Ahem) When stanley had the option to cut the piece of paper in more, he did it because he had NOTT-hing better to do but to annoy me. Then he found the bucket and realised this game is kinda stupid";
}
else if(piecesCount === 32768) {   
    gameImage.middleSlotblyatt.src = "./assets/paper in ear.png";
    document.getElementById('commentary').textContent = "You have 32768 pieces of paper. You know, maybe he's not even reading this";
}
else if(piecesCount === 65536) {
    gameImage.middleSlotblyatt.src = "./assets/very tiny pieces.png";
    document.getElementById('commentary').textContent = "You have 65536 pieces of paper. HOW ARE YOU STILL RIPPING, HOW? WHAT KIND OF HANDS DO YOU HAVE???";
}   
else if(piecesCount === 131072) {
    document.getElementById('pieces').style.display='none';
    gameImage.middleSlotblyatt.src = "./assets/smug.png";
    document.getElementById('commentary').textContent = "You don't know how many you have, do you? >:}";
}
else if(131072 <= piecesCount && piecesCount <= 1000000) {
    gameImage.middleSlotblyatt.src = "./assets/cutting paper.jpg";//random image is destroying stuff here so solve it
    document.getElementById('commentary').textContent = "You have " + piecesCount + " pieces of paper. Please stop cutting the paper.";
    document.getElementById('pieces').style.display="none";
}
else if(piecesCount > 1000000 && piecesCount<2000000) {
    gameImage.middleSlotblyatt.src = "./assets/no more paper.png";
    document.getElementById('commentary').textContent = "You have " + piecesCount + " pieces of paper. You dont have the right to cut the paper anymore. stop playing.GG";
    //break;//this is not a loop so break is not needed also
}
else window.location.href = "end.html";
}
updateImages();

