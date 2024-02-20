/* tools: 

 -prompt
 -multiplication
 -subtraction
 -if 

*/

// ____________________________________ //

// Get the user name
const userNameField = document.getElementById('fullName');
// console.log(userName.value);

// Get the km the user wants to run
const kmField = document.getElementById('kmToRun');
// console.log(km.value);

// Get the km the user wants to run
const userAgeField = document.getElementById('userAge');
// console.log(userAge.value);

// ____________________________________ //

// Add a button that triggers the value from the user's input


document.getElementById('submit').addEventListener('click', function(){
    const kmNumber = Number(kmField.value);
    const ageNumber = Number(userAgeField.value);

    console.log(userNameField.value);
    console.log(ageNumber);
    console.log(kmNumber);



    // Calculate the trip total price:
 // = 0.21€/km

 const pricePerKm = 0.21;
 console.log(pricePerKm);

 const tickeFullPrice = (pricePerKm * kmNumber);
 console.log(tickeFullPrice);




// subtract the discounts
    // subtract the 20% discount for the passengers underage (under 18)
if (ageNumber < 18) {
    const ticketDiscount20 = ((tickeFullPrice / 100) * 80);
    console.log(ticketDiscount20.toFixed(2) + "€");

    // sottsubtract the 40% discount for the elder passengers (over 65)
} else if (ageNumber >= 65) {
    const ticketDiscount40 = ((tickeFullPrice / 100) * 60);
    console.log(ticketDiscount40.toFixed(2) + "€");

    // no discount for adults passengers (18-64)
} else {
    console.log(tickeFullPrice.toFixed(2) + "€");
}
})


