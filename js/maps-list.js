const divEventos = document.querySelector('#listaEv');
let map;
var markers =[];
var marker;
let center = {lat:-6.892021526686363, lng:-38.55870364759306};
let corde = [];
async function listarEventos(){
    
    const retorno = await fetch('http://localhost:3000/eventos');
    const eventos = await retorno.json();
    mostrarEventos(eventos);
};
function mostrarEventos(eventos){

    eventos.forEach(evento => {
        const longi = evento.localizacao.coordinates[0];
        const lati = evento.localizacao.coordinates[1];
        const nome = evento.nomeEvento;
        const data = evento.dataInicio;
        const newDate = data.split('-').reverse().join('/');
        cord = {lat: lati, lng: longi};
        corde.push({cord, nome});
        const novoEvento =         
        `<div class="containerEvento">
        <div class="evt">            
        <h4 class="panel-title">${evento.nomeEvento}</h4>
        </div>
        <div class="descr">
        <p>${evento.descricao}</p>
        </div>
        <div class="dat">
        <p>Data: ${newDate}</p>
        </div>
        </div>`;  
        divEventos.innerHTML = divEventos.innerHTML + novoEvento;
        
    });
    console.log(corde);
    addMarker();
};
function addMarker(){ 
    for(let i =0; i<corde.length; i++){
        const {cord, nome} = corde[i];
        marker = new google.maps.Marker({
            position: {
                lat: cord.lat,
                lng: cord.lng
                },
                map: map,
                title: nome
                });
                marker.setMap(map);

    }       
};

async function initMap() {
    //@ts-ignore
const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map1"), {
    center: center,
    zoom: 15,
});



};
window.initMap();


