function show_Magicians(magicians: string[]): void {
    for (let I = 0; I < magicians.length; I++) {
      console.log(magicians[I]);
    }
  }
  function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let I = 0; I < magicians.length; I++) {
      modifiedMagicians.push(`${magicians[I]} the Great`);
    }
    return modifiedMagicians;
  }
  let magiciannames: string[] = ["Harry Houdini’, ‘David Copperfield’, ‘Penn Jillette’, ‘Teller"];
  let modifiedMagicianNames = make_great(magiciannames); // Using spread operator to create a copy
  console.log("Original Magician Names:");
  show_Magicians(magicianNames);
  console.log("\nModified Magician Names:");
  show_Magicians(modifiedMagicianNames);
  