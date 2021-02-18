/* let image = document.getElementById("like");

image.addEventListener("click", function() {
    image.setAttribute("src", "./imgs/dislike.png");
}) */

/* let lista = document.getElementById("lista");

let num = parseInt(lista.dataset.num);



let conteudo = "";

for(let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo; */

let video = document.getElementById("video1");

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function retroceder(){
    video.currentTime -= 5;
}

function avancar(){
    video.currentTime += 5;
}

function aumentar_vol(){
    video.volume += 0.2;
}

function diminuir_vol(){
    video.volume -= 0.2;
}


