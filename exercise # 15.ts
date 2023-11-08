const DinnerGuests: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
const GuestCannotMakeIt: string = DinnerGuests[1]; // Assuming the second guest can’t make it
const NewGuest: string = "Marie Curie"; // New person to invite
console.log(`${GuestCannotMakeIt} can’t make it to the dinner.`);
DinnerGuests[1] = NewGuest; // Replace the guest who can’t make it with the new guest
for (let i = 0; i < DinnerGuests.length; i++)
{  const guest: string = dinnerGuests[i]; console.log`Dear ${guest}, you are cordially invited to dinner at my place. It would be an honor to have you join us.`;}
