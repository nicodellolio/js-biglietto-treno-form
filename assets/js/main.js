/* tools: 

 -prompt
 -multiplication
 -subtraction
 -if 

*/

// ____________________________________ //

// Get the user name
const userName = document.getElementById('fullName');
console.log(userName.value);

// Get the km the user wants to run
const km = document.getElementById('kmToRun');
console.log(km.value);

// Get the km the user wants to run
const userAge = document.getElementById('userAge');
console.log(userAge.value);


// Calculate the trip total price:
 // = 0.21€/km

 const pricePerKm = (0.21);
 console.log(pricePerKm);

 const tickeFullPrice = (pricePerKm * km);
 console.log(tickeFullPrice);


// subtract the discounts
    // subtract the 20% discount for the passengers underage (under 18)
if (userAge < 18) {
    console.log((tickeFullPrice / 100) * 80);
    let ticketDiscount20 = ((tickeFullPrice / 100) * 80);

    // sottsubtract the 40% discount for the elder passengers (over 65)
} else if (userAge >= 65) {
    console.log((tickeFullPrice / 100) * 60);
    let ticketDiscount40 = ((tickeFullPrice / 100) * 60);

    // no discount for adults passengers (18-64)
} else {
    console.log(tickeFullPrice);
}

// ____________________________________ //

// Add a button that triggers the value from the user's input

document.getElementById('submit').addEventListener('click', function(){
    console.log(userName.value);
    console.log(userAge.value);
    console.log(km.value);
})
