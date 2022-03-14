console.clear();

const fs = require("fs/promises");

(async () => {
	const drinks = await fs.readFile("./data/drinks.txt", "utf-8");
	console.log(drinks);

	for (const letter of drinks) {
		console.log(letter);
	}
})();
