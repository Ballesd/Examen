function validar(){
    let valor = document.getElementById('poblacion').value;
    //alert(valor);
    intvalo = parseInt(valor);
    if(intvalo < 0 || intvalo > 2500000000 ){
        alert("No se pueden ingresar valores negativos ni mayores a 2500M");
    }
}

function ConsumAPI(){
    let id = []
    let nombre = [];
    let capital = [];
    let idioma = [];
    let poblacion = [];
    var cantidad = 0; 
    let datos = '';

    let url = "http://127.0.0.1:8000/api/paises";
    fetch(url)
    .then(data_obtanined => data_obtanined.json())
    .then(function (data_obtanined){
        data_obtanined.forEach(function agregar(data_obtanined) {

            id.push(data_obtanined.id)
            nombre.push(data_obtanined.nombre);
            capital.push(data_obtanined.capital);
            idioma.push(data_obtanined.idioma);
            poblacion.push(data_obtanined.poblacion);
            cantidad = cantidad + 1;
            
        });
        var trace = {
            type: "pie",
            values: poblacion,
            labels: nombre,
          };
        var data = [trace];
        Plotly.newPlot('grafo', data);
        for(var i = 0; i < cantidad; i++){
            datos = datos + 
            `            
                <tr>
                    <td>`+id[i]+`</td>
                    <td>`+nombre[i]+`</td>
                    <td>`+capital[i]+`</td>
                    <td>`+idioma[i]+`</td>
                    <td>`+poblacion[i]+`</td>
                </tr>
            `
        }
        document.getElementById("tablaAPI").innerHTML = datos;
    });
    

/*   
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
*/

}
