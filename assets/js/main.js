/* tools: 

 -prompt
 -multiplication
 -subtraction
 -if 

*/

// ____________________________________ //

// Get the user name
const userName = document.getElementById('fullName').value;
console.log(userName);

// Get the km the user wants to run
const km = document.getElementById('kmToRun').value;
console.log(km);

// Get the km the user wants to run
const userAge = document.getElementById('userAge').value;

// calcolare il prezzo totale del viaggio:
 // = 0.21€/km

 let pricePerKm = (0.21);
 console.log(pricePerKm);

 let tickeFullPrice = (pricePerKm * km);
 console.log(tickeFullPrice);


// sottrarre sconto per categoria
    // sottrare uno sconto del 20% per i minorenni (under 18)
if (userAge < 18) {
    console.log((tickeFullPrice / 100) * 80);
    let ticketDiscount20 = ((tickeFullPrice / 100) * 80);

    // sottrare uno sconto del 40% per gli anziani (over 65)
} else if (userAge >= 65) {
    console.log((tickeFullPrice / 100) * 60);
    let ticketDiscount40 = ((tickeFullPrice / 100) * 60);

    // nessuno sconto per i passegeri adulti (18-64)
} else {
    console.log(tickeFullPrice);
}

// ____________________________________ //

