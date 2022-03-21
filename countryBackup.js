const fs = require("fs/promises");
const path = require("path");

//https://www.youtube.com/watch?v=JI_n4Q5AGh8&list=PLcLHBZr0jPAB5YR8e9hezoWpEkGjgnJQK&index=7

// console.log(__dirname);
// console.log(__filename);

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

	//Sita funkcija atrenka vaikus is objekto saraso, bet kadangi naudoju .map metoda is karto rezultate, sitos funkcijos nebereikia naudot.//

	// function childrenNames(childrenList) {
	// 	const namesOnly = [];

	// 	for (const child of childrenList) {
	// 		namesOnly.push(child.name);
	// 	}

	// 	return namesOnly.join(", ");
	// }

	const fullPath = path.join(__dirname, "./data/country.json");
	const countryContent = await fs.readFile(fullPath, "utf-8");

	const [personError, personObj] = parseJSONtoObject(countryContent);

	console.log("----------------------------");

	if (personError) {
		console.log("Parsinant faila ivyko klaida");
	} else {
		const { name, lastname, children } = personObj;
		console.log(
			`${name} ${lastname} has ${
				children.length
			} children and they names are: ${children
				.map((name) => name.name)
				.join(", ")}`
		);
	}
})();
