import { createElementFromString } from "./parser";

const dialerButton = (() => {
	function create(name: string, url: string) {
		return createElementFromString(`
      <li class="dialer-button">
        <a href="${url}">
          <span>${name}</span>
        </a>
        <button 
          type="button" 
          data-remove-button
        >X</button>
      </li>
    `);
	}

	return {
		create,
	};
})();

export { dialerButton };
