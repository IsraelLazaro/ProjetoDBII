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
        };
initMap();
// CONECTANDO COM API E SALVANDO O EVENTO
async function conectarAPI(obj){
    const api = await fetch('http://localhost:3000/eventos', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            }).then(res =>{
                alert('Evento foi salvo com sucesso!')
                limparCampos();
            }).catch(erro=>{
                alert('Não foi possível salvar o evento')
            });
    if(retorno.status ===200){
        window.location.href = "eventos.html";
        }else{
            console.log('ERRO') 
            };
            const eventos = await api.json();
            console.log(eventos);    
};
// ADICIONANDO EVENTO AO BOTÃO SALVAR PARA ENVIAR OS DADOS PARA O DANCO
const btn = document.querySelector('#salvar');
btn.addEventListener('click', () => {    
    const obj = {
        nomeEvento:document.querySelector('#nomeEv').value,
        dataInicio: document.querySelector('#dataI').value,
        descricao: document.querySelector('#descricao').value,
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
        };
    conectarAPI(obj);
    });
    function limparCampos(){
        document.querySelector('#nomeEv').value="";
        document.querySelector('#dataI').value="";
        document.querySelector('#descricao').value=""
        document.querySelector("#coordenadas").value=""
        };

    




