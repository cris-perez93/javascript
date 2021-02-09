//ejercicio 1

console.log("Hola mundo")

//ejercicio 2

alert("Hola! Soy Cristian!")

//ejercicio 3

let nombre="Cristian"
let apellido="Perez"

console.log(nombre,apellido)

//ejercicio 4

const x= 34;
const y= 56;
const total=x+y

console.log ("la suma entre 34 i 56 es: " + total);

//ejercicio 5

let nota_examen=prompt("Introduce tu calificación")

nota_examen>=5 ? alert ("enhorabuena") : alert("Lo siento no has aprobado")

//Ejercicio 6

//1.obtener el tagP apartir de una selección con querySelector.
//2. Cogemos el valor que hay dentro del tag P y lo asignamos a una variable (textoP)
//3. Reemplazamos la palabra "verd" dentro de la variable y actualizamos.
//4. Reescribimos el tag p con la frase actualizada.

let frase=document.querySelector("#frase")

console.log(frase);

let textoP= frase.innerHTML

textoP=textoP.replace("verd", "blau",)

frase.innerHTML=textoP

//reemplazo de la vocal "o" por "u"

let vocales = document.querySelector("#vocales")

console.log(vocales)

let vocalP= vocales.innerHTML

vocalP= vocalP.replaceAll("o","u")

vocales.innerHTML= vocalP

//Ejercicio 7



let llista=["taula" ,"cadira","ordinador","llibreta"];

for(let i=0; i<llista.length; i++){

    console.log("L'objecte" + " " + llista[i] +" " + "està en la posició" +" " + i);
}

//Ejercicio 8

function calculate(num1, operator, num2){
    
switch(operator.trim()){  // recortar posibles espacios vacios.

    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '/':
      return num1 / num2
    case '*':
      return num1 * num2

}
}

let resultado= (calculate(2,"/",1));

document.write(resultado);