const jedi = []
jedi[0] = `Luke`;
jedi.push(`Obi-Wan Kenobi`);
jedi.unshift(`Yoda`)

console.log(jedi[1]);

jedi.pop();
console.log(jedi);

jedi.shift();
console.log(jedi);

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic" ];

const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

const villainSlice = starWarsVillains.slice(0,2);
console.log(villainSlice);

const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO",
    assassin: "IG-88"
}
console.log(droids["astromech"]);//R2-D2
console.log(droids.protocol); // C-3PO

droids.assassin = "IG-11";
console.log(droids);

// BONUS

