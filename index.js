document.getElementById("mensagem").innerText = "Are you ready?";

let container = document.getElementById("area");

let form = document.createElement("form");

let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";

let inputIdade = document.createElement("input");
inputIdade.type = "number";
inputIdade.placeholder = "Digite sua idade";

let botaoEnviar = document.createElement("button");
botaoEnviar.type = "submit";
botaoEnviar.innerText = "Enviar";

form.appendChild(inputNome);
form.appendChild(document.createElement("br"));
form.appendChild(inputIdade);
form.appendChild(document.createElement("br"));
form.appendChild(botaoEnviar);

container.appendChild(form);

let containerVideo = document.getElementById("areaVideo");
let video =document.createElement("video");
video.id = "video";
video.src = "img/dancing.mp4";
video.controls = true;

video.muted = true;
video.autoplay = true;
containerVideo.appendChild(video);