let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount - (partySize);
        console.log(`Capacity: ${this.guestCapacity} - Spaces left: ${seatsLeft}.`)
        return seatsLeft >= partySize
    },
    seatParty: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        if (seatsLeft>= partySize) {
            this.guestCount = this.guestCount + partySize;
        } else {
            console.log("Can't add to restaurant");
        }        
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;
    },
    viewAvailability: function() {
        console.log(`Capacity: ${this.guestCapacity} - Spaces left: ${this.guestCapacity - this.guestCount}.`)
    }

}

restaurant.viewAvailability();
restaurant.seatParty(20);
restaurant.viewAvailability();
restaurant.removeParty(15);
restaurant.viewAvailability();
restaurant.seatParty(75);
restaurant.viewAvailability();


// restaurant.checkAvailability(guests);
// restaurant.seatParty(guests);
// guests = 30;
// restaurant.seatParty(guests);
// restaurant.checkAvailability(guests);
// restaurant.removeParty(5);
// guests = 30;
// restaurant.seatParty(guests);
// restaurant.checkAvailability(guests);



