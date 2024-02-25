/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado

    // Uso la expresion regular ^[A-Za-z]+$ para condcionar que todo sea mayuscula o minuscula
    // el método .test() me retorna un true, si se cumple la expresión.(niego el condicional para trabajar más facil)
    do {
        var nombre = prompt("Ingese su nombre por favor:");
        if(!/^[A-Za-z]+$/.test(nombre))
        {
            alert("Lembre-se de que só é aceito letras no nome")
            nombre = "n"
        }
        else if(nombre.length < 3){
            alert("O nome deve ter 3 ou mais letras para ser válido")
        }
        else{
            alert("Bora jogar " + nombre.toUpperCase() +"! Boa sorte!");
        }
    } while (nombre.length < 3)

    // // mostramos los datos por consola
    // console.log("----------------------------");
    // console.log("El jugador es:")
    // console.log(nombre);
    // console.log("----------------------------");



    return nombre;
}

iniciarJuego();


  /* -------------------------------------------------------------------------- */
  /*                          CONSIGNA MESA DE TRABAJO                          */
  /* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.