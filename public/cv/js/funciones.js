
function suma(a, b) {
    console.log(a + b);

}
function mostrarvalores() {
    alert(campo_text.value);
}
var memo = "r";
function moverboton() {
    if (memo == "r") {
        boton.className = "ui button left floated";


        memo = "l";
    }
    else if(memo=="l"){ boton.className = "ui button right floated";
memo="r" ;}
} 