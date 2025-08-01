// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crear un array para almacenar los nombre de los amigos
let listaDeAmigos = [];
console.log(listaDeAmigos);

//funcion para llamar etiquetas del HTML para mostrar los valores (Nombres).
function amigosAgregados(etiquetaP, nombre) {
    let etiquetaPHTML = document.querySelector(etiquetaP);
    etiquetaPHTML.innerHTML = nombre;
    return;
}
//funcion que borra el nombre después de ser ingresado.
function restaurarInput() {
   document.querySelector('#amigo').value = '';
   return;
}
//crear una funcion con if para validar que lo que se ingrese sea un string.
function agregarAmigo(){
    let input = document.getElementById('amigo').value.trim();
    console.log('usted está aquí!');
    if(input != ''){
    listaDeAmigos.push(input);
    amigosAgregados(('#resultado'), '');
    amigosAgregados(('#listaAmigos'),`${listaDeAmigos.join('<br>')}`);
    console.log(listaDeAmigos);
    restaurarInput();
    console.log(input);
    } else {
        alert('Inserte un nombre, por favor.');
    }    
    return;
}
//crear una funcion que sortee un numbre de un amigo al azar desde el array
function sortearAmigo(){
    if(listaDeAmigos.length == 0){
        return;
    } else {
        let sorteo = Math.floor(Math.random()* listaDeAmigos.length);
        let resultadoSorteo = listaDeAmigos[sorteo];
        console.log('ahora estas aquí');
        amigosAgregados(('#listaAmigos'), '');
        amigosAgregados('#resultado',`Tu amigo secreto es:" ${resultadoSorteo}"`);
        listaDeAmigos = [];
        return; 
    }
}