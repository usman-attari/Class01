const guestcannotMakeIt: string = dinnerGuests[1]; // Assuming the second guest can’t make it
const guestCannotMakeIt: string = dinnerGuests[1]; // Assuming the second guest can’t make it
const newGuest: string = "Marie Curie"; // New person to invite
console.log(`${guestCannotMakeIt} can’t make it to the dinner.`);
dinnerGuests[1] = newGuest; // Replace the guest who can’t make it with the new guest
console.log("Good news! I found a bigger dinner table");
// Add new guests to the array
dinnerGuests.unshift("Isaac Newton"); // Add one guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Galileo Galilei"); // Add one guest to the middle
dinnerGuests.push("Charles Darwin"); // Append one guest to the end
// Print invitation messages for all guests
for (let I = 0; I < dinnerGuests.length; I++)
{const guest: string = dinnerGuests[I];   console.log(`Dear ${guest}, you are cordially invited to dinner at my place. It would be an honor to have you join us.`);}
