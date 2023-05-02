const divEventos = document.querySelector('#listaEv');
let map;
var infoWindows=[];
var markers =[];
var marker;
let center = {lat:-6.892021526686363, lng:-38.55870364759306};
let corde = [];
const imagem = '../img/ponto-de-pin.png';

async function initMap() {    
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map1"), {
        center: center,
        zoom: 15,
        });
    };
    function setMarkes(){  
        for (let i = 0; i < markers.length; i++) {
            marker = markers[i];
            markers[i].setMap(map);
            let infoWindow = new google.maps.InfoWindow({
                content: `<h4>${markers[i].title}</h4>`
                });
            infoWindows.push(infoWindow);
            markers[i].addListener('click', function(){
                infoWindows[i].open(map, markers[i]); 
                map.addListener("click", function() {
                    infoWindow.close();
                    }); 
                });
            };
        };
    
window.initMap();

async function listarEventos(){    
    const conect = await fetch('http://localhost:3000/eventos');
    const eventos = await conect.json();
    mostrarEventos(eventos);
    setMarkes();
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
                title: nome,
                animation: google.maps.Animation.BOUNCE,
                icon: imagem
            });
            markers.push(marker);                   
    };        
};



