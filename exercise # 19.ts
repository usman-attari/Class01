const dinnerGuests: string[] = ["Isaac Newton”, “Albert Einstein”, “Ada Lovelace”, “Nelson Mandela”, “Galileo Galilei”, “Charles Darwin"];
console.log("Unfortunately, the new dinner table won’t arrive in time. I can only invite two people for dinner.");
while (dinnerGuests.length > 2){const removedGuest: string = dinnerGuests.pop()!;
    console.log(`Sorry, ${removedGuest}, I can’t invite you to dinner this time.`);
  }
  console.log(`The number of people invited to dinner is ${dinnerGuests.length}.`);
for (let I = 0; I < dinnerGuests.length; I++){  const guest: string = dinnerGuests[i];
    console.log(`Dear ${guest}, you are still invited to dinner at my place.`);
  }

dinnerGuests.splice(0); // Remove the last two names from the list
console.log("Updated guest list:", dinnerGuests);

