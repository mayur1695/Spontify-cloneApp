console.log("hello Mayur")
let songIndex=0
let audioElement=new Audio("Data/1.mp3");
// audioElement.play();
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif")
let songItems=Array.from(document.getElementsByClassName("songItem"))
let element;
let songs=[
    {songsName:"1",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\1.mp3",coverPath:"Data/1.jpg"},
    {songsName:"2",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\2.mp3",coverPath:"Data/2.jpg"},
    {songsName:"3",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\3.mp3",coverPath:"Data/3.jpg"},
    {songsName:"4",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\4.mp3",coverPath:"Data/4.jpg"},
    {songsName:"5",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\5.mp3",coverPath:"Data/5.jpg"},
    {songsName:"6",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\6.mp3",coverPath:"Data/6.jpg"},
    {songsName:"7",filePath:"C:\Users\Admin\Desktop\project\Spontify-cloneApp\Data\7.mp3",coverPath:"Data/7.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName; 
})



masterplay.addEventListener('click',()=>{
   if (audioElement.paused||audioElement<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1
   }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0
    }
})

audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate")
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log("progress");
    myProgressBar.value=progress; 
})
myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})