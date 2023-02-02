console.log("Welcome to Spotify")

//Inistialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Teri Galliyan", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Tu hi meri shab he", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Hamari adhuri kahani", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "KAbhi jo badal barse", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "khamoshiyan", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Risshte Naate", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "AAShqui 2", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Dil ibadat", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Dope Shope", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "High Rated Gabru", filePath: "10.mp3", coverPath: "10.jpg"},

]
songItem.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src =songs[i].coverPath;
element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})

//Handle Play/pause Clicks
masterPlay.addEventListener('click',() => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }
    })
//Listem to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
      
      
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex =0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =9
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause'); 
  
})
