/**
 * Parses an HTML string and returns the first child element.
 *
 * @param htmlString - The HTML string to parse.
 * @returns The first child element of the parsed HTML string.
 */
const createElementFromString = (htmlString: string) => {
	const parser = new DOMParser();
	const el = parser.parseFromString(htmlString, "text/html");
	return el.body.firstChild;
};

export { createElementFromString };
