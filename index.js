const masyvasA = [10, 8, 2, 4];
const masyvasB = [1, 3, 5, 7, 9];
const masyvasC = [147, 258, 369, 123, 456, 789];

// Rezultata pateikti tokiu sablonu
// Skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis]

function vidurkioApskaiciavimas(masyvas) {
	let i = 0;
	let kiekis = 0;
	let suma = 0;

	for (const skaicius of masyvas) {
		kiekis = ++i;
		suma += skaicius;
	}
	const vidurkis = suma / kiekis;
	return console.log(
		`Skaiciu masyvas, kuri sudaro ${kiekis} skaiciai, vidurkis yra ${vidurkis}`
	);
}

vidurkioApskaiciavimas(masyvasC);

console.log("------------------------------------");

const s1 = "mike Pukuotukas";
const s2 = "Chuck Norris";
const s3 = "Wonder WomaN";
const s4 = "Algimantas cekuolis";

// Rezultata pateikti tokiu sablonu
// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

let inicialai = (string) => {
	const words = string.split(" ");
	const vardas = words[0];
	const init1 = vardas[0].toUpperCase();
	const pavarde = words[1];
	const init2 = pavarde[0].toUpperCase();
	console.log(
		`Legendines asmenybes ${vardas} ${pavarde} trumpinys yra ${init1}.${init2}.`
	);
};

inicialai(s3);

console.log("------------------------------------");

// [Vardas] [Pavarde] yra [amzius] amziaus

const people = [
	{ name: "Jonas", surname: "Jonaitis", age: "99" },
	{ name: "Maryte", surname: "Marytaite", age: "87" },
	{ name: "Jonas", surname: "Jonaitis", age: "99" },
	{ name: "Maryte", surname: "Marytaite", age: "87" },
	{ name: "Jonas", surname: "Jonaitis", age: "99" },
	{ name: "Maryte", surname: "Marytaite", age: "87" },
];
let prisistatymas = (person) => {
	console.log(`${person.name} ${person.surname} yra ${person.age} amziaus`);
};

for (const person of people) {
	prisistatymas(person);
}
