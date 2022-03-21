const fs = require("fs/promises");
const path = require("path");

(async () => {
	const fullPath = path.join(__dirname, "./data/country.json");
	const countryContent = await fs.readFile(fullPath, "utf-8");

	function parseJSONtoObj(text) {
		try {
			const obj = JSON.parse(text);
			return [false, obj];
		} catch (error) {
			return [true, {}];
		}
	}

	const [personError, personObj] = parseJSONtoObj(countryContent);

	console.log("----------------------------------------------------");

	if (personError) {
		console.log("Parsinant faila ivyko klaida");
	} else {
		const { name, lastname, children } = personObj;
		console.log(
			`${name} ${lastname} has ${
				children.length
			} children and they names are: ${children
				.map((n) => n.name)
				.join(", ")}.`
		);
	}
})();
