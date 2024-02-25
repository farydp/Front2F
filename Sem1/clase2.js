/* -------------------------------------------------------------------------- */
  /*                          CONSIGNA MESA DE TRABAJO                          */
  /* -------------------------------------------------------------------------- */
  // 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
  // 2- La función debe mostrar por consola el resultado de la partida.
  // 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
  // 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.


function usuario(){

    alert("Para ganhar, você precisa escrever o número estabelecido para cada coisa no lançamento: \n 1 = pedra. \n 2 = papel. \n 3 = tesoura.");
    let opcionUsuario;

    do{
        opcionUsuario = parseInt(prompt("Ingresa tu elección"));
        if(isNaN(opcionUsuario) || opcionUsuario > 3 || opcionUsuario < 1){
            alert("opção não disponível. Selecione novamente por favor.")
        }
    } while(isNaN(opcionUsuario) || opcionUsuario > 3 || opcionUsuario < 1);
    return opcionUsuario;
}

function pc(){
    let opcionPc = parseInt(Math.random() * 3 + 1);
    return opcionPc;
}

function comparar(){
    let opciones = ["no opção", "Pedra", "Papel", "Tesoura"];
    seleccionUsuario = usuario();
    seleccionPc = pc();
    alert("Você escolheu:" + opciones[seleccionUsuario] + " e o Pc: " + opciones[seleccionPc]);

    if(seleccionUsuario == seleccionPc){
        alert("A máquina e você empataram");
    } else if( (seleccionUsuario == 1 && seleccionPc == 3) || (seleccionUsuario == 2 && seleccionPc == 1) || (seleccionUsuario == 3 && seleccionPc == 2)){
        alert("Você ganhou! Parabéns!");
    } else{
        alert("Você perdeuuuu. Ánimo, da próxima vez será");
    }
}

comparar();