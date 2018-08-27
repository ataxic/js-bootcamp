let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log("Serve vegan meals only!");
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
    console.log("Serve 1 vegan meal and 1 meat meal");
} else {
    console.log("Meat feast tonight!");
}