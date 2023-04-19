let map;
let markers =[];
let marker;
let center = {lat:-6.892021526686363, lng:-38.55870364759306};

async function initMap() {
  //@ts-ignore
const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
    center: center,
    zoom: 15,
});

marker = new google.maps.Marker({
    map: map,
    position: center,
    draggable: true,
    title: "Cajazeiras"    
});

map.addListener("click", (event)=>{
    addMarker(event);
});

function addMarker(event){
    marker.setPosition(event.latLng);
    const imput = document.getElementById("coordenadas");
    imput.value = event.latLng; 
    
};
}
initMap();


