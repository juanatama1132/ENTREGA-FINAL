Swal.fire('¡AHORA A DIVIDIR!')
var number = prompt("Digita un número");
var divisors = "";

for(var i = 0; i <= number; i++){
    if(number % i == 0){
        divisors += i + "<br>";
    }
}

document.write("Los divisores del número " + number + " son: <br>" + divisors);