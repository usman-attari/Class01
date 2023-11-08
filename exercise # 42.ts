function show_magicians(magicians: string[]): void {
    for (let I = 0; I < magicians.length; I++) {
      console.log(magicians[I]);
    }
  }
  function Make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians.push(`${magicians[i]} the Great`);
    }
    return modifiedMagicians;
  }
  let MagicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  let ModifiedMagicianNames = make_great(magicianNames);
  show_magicians(modifiedMagicianNames);
  
  