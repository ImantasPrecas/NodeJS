console.clear();

const fs = require("fs/promises");

(async () => {
	const drinksContent = await fs.readFile("./data/drinks.txt", "utf-8");
	const drinksList = drinksContent.split("\r\n");

	//Pasirinkimas1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
	//Pasirinkimas1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
	//Pasirinkimas1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.

	let i = 0;
	for (const content of drinksList) {
		const drinkDetails = content.split(" ");
		const [name, price, count] = drinkDetails; //Destrukturizavimas
		const balance = +price * +count;
		const b1 = +balance.toFixed(2);
		const b2 = Math.round(balance * 100) / 100;

		console.log(
			`Pasirinkimas ${++i} ${name} kurio kaina yra ${price} EUR buvo parduota ${count} ir bendra apyvarta yra ${b2.toFixed(
				2
			)} EUR.`
		);
	}
})();
