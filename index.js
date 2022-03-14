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
const s3 = "Wonder womaN";
const s4 = "Algimantas cekuolis";

// Rezultata pateikti tokiu sablonu
// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

let inicialai = (string) => {
	const word = string.split(" ");
	const vardas = word[0][0].toUpperCase();
	const pavarde = word[1][0].toUpperCase();
	console.log(
		`Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${vardas}.${pavarde}.`
	);
};

inicialai(s3);

console.log("------------------------------------");

// [Vardas] [Pavarde] yra [amzius] amziaus

const jonas = {
	name: "Jonas",
	surname: "Jonaitis",
	age: "99",
};

const maryte = {
	name: "Maryte",
	surname: "Marytaite",
	age: "87",
};

let prisistatymas = (obj) => {
	console.log(`${obj.name} ${obj.surname} yra ${obj.age} amziaus`);
};

prisistatymas(maryte);
