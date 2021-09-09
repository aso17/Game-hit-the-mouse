const tanah =document.querySelectorAll('.tanah');
const tikus =document.querySelectorAll('.tikus');
const skorPapan=document.querySelector('.skor');
const pop=document.querySelector('#pop');

let tanahsebelumnya;
let selesai;
let skor;
function RandomTanah(tanah){
    
    // const jml=tanah.length;
    const t= Math.floor(Math.random() * tanah.length );
    const trandom=tanah[t];
    if(trandom == tanahsebelumnya){
        RandomTanah(tanah);
    }
    tanahsebelumnya=trandom;
    return trandom; 
}
function RandomWaktu(max,min){
    return Math.round(Math.random()*(max-min)+(min));
}
function tikusMuncul(){
    const waktu=RandomWaktu(300,1000);
    const tRandom= RandomTanah(tanah);
    tRandom.classList.add('muncul');

    setTimeout(function(){
        tRandom.classList.remove('muncul');
        if(!selesai){
            tikusMuncul();
        }
    },waktu);

}

function mulai(){
selesai=false;
skor=0;
skorPapan.textContent=skor;

    tikusMuncul();
    setTimeout(function(){
        selesai=true;
    },10000)
}
function pukul(){
    pop.play();
    skor++;
    skorPapan.textContent='skor:'+skor;
}
tikus.forEach(t => {
    t.addEventListener('click',pukul)
});