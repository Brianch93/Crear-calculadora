let nombre = prompt("Hola, por favor digame su nombre.");
alert("Bienvenido a la calculadora web " + nombre);
let num1= parseInt(prompt("A continuación realizaremos unas cuentas. Ingrese un número."));
let num2= parseInt(prompt("Ahora ingrese otro número"));
alert("Usted ingreso los siguientes números: (" + num1 + ") y (" + num2 + ")");
let cuenta= prompt("Ahora indique que operación desea realizar: (+)suma (-)resta (*)multiplicación (/)división");
let mensaje;

switch (cuenta) {
    case "+" :
        mensaje=("El total de la suma es: " + (num1+num2))
        break;
    case "-" :
        mensaje=("El total de la resta es: " + (num1-num2))
        break;
    case "*" :
        mensaje=("El total de la multiplicación es: " + (num1*num2))
        break;
    case "/" :
        if (num2==0){
            mensaje=("ERROR! no puedo realizar la operación ya que el divisor es un cero")
        }else
            mensaje=("El total de la división es: " + (num1/num2))
            break;
}

alert(mensaje)