function validar(){
    let valor = document.getElementById('poblacion').value;
    //alert(valor);
    intvalo = parseInt(valor);
    if(intvalo < 0 || intvalo > 2500000000 ){
        alert("No se pueden ingresar valores negativos ni mayores a 2500M");
    }
}

function ConsumAPI(){
    let nombre = [];
    let capital = [];
    let idioma = [];
    let poblacion = [];

    let url = "http://127.0.0.1:8000/api/paises";
    fetch(url)
    .then(data_obtanined => data_obtanined.json())
    .then(function (data_obtanined){
        data_obtanined.forEach(function agregar(data_obtanined) {

            nombre.push(data_obtanined.nombre);
            capital.push(data_obtanined.capital);
            idioma.push(data_obtanined.idioma);
            poblacion.push(data_obtanined.poblacion);
        
        });
        var trace = {
            x: nombre,
            y: poblacion,
            type: 'histogram',
          };
        var data = [trace];
        Plotly.newPlot('grafo', data);
    });
}

const tbody = document.querySelector('#tbl-paises tbody');
let mostrar_datos = async() => {
    let paises = await listar_paises();
    tbody.innerHTML = '';
    for (let i = 0; i < paises.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = paises[i]['id'];
        fila.insertCell().innerHTML = paises[i]['nombre'];
        fila.insertCell().innerHTML = paises[i]['capital'];
        fila.insertCell().innerHTML = paises[i]['idioma'];
        fila.insertCell().innerHTML = paises[i]['poblacion'];
    }
};
mostrar_datos();
