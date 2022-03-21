const fs = require("fs/promises");
const path = require("path");

console.log(__dirname);
console.log(__filename);

// [Parent-name] [Parent-surname] has [count] children and they names are: [child-name], [child-name]...

(async () => {
	function parseJSONtoObject(text) {
		try {
			const obj = JSON.parse(text);
			return [false, obj];
		} catch (error) {
			return [true, {}];
		} finally {
			console.log("Baigiau bandyti parsinti faila...");
		}
	}

	const fullPath = path.join(__dirname, "./data/country.json");
	const countryContent = await fs.readFile(fullPath, "utf-8");

	const [personError, personObj] = parseJSONtoObject(countryContent);

	if (personError) {
		console.log("Parsinant faila ivyko klaida");
	} else {
		console.log(personObj);
	}
})();
