Swal.fire('¡TODO SE APRENDE!')
var frase = prompt("Escribe una frase");
var vocals = ["a", "e", "i", "o", "u"];
var aCount = 0;
var eCount = 0;
var iCount = 0;
var oCount = 0;
var uCount = 0;

for(var i = 0; i < frase.length; i++){
    if(frase.charAt(i) == vocals[0]){
        aCount += 1;
    } else if(frase.charAt(i) == vocals[1]){
        eCount += 1;
    } else if(frase.charAt(i) == vocals[2]){
        iCount += 1;
    } else if(frase.charAt(i) == vocals[3]){
        oCount += 1;
    } else if(frase.charAt(i) == vocals[4]){
        uCount += 1;
    }
}

document.write("En la frase " + "'" + frase + "'" + " se encontró el siguiente número de vocales:<hr>")
document.write("a: " + aCount + " ");
document.write("e: " + eCount + " ");
document.write("i: " + iCount + " ");
document.write("o: " + oCount + " ");
document.write("u: " + uCount + " ");