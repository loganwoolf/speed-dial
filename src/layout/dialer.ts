import { dialerButton } from "../module/createDialerButton";
import { createElementFromString } from "../module/parser";
import "./dialer.css";

const dialer = (() => {
	const element = createElementFromString(`
    <div class="dialer">
      <h1>Speed Dial</h1>
			<ul class="dialer-list">
				<li class="add-dialer-button">
					<form>
						<label for="url">URL</label>
						<input type="text" name="url" placeholder="gmail.com" autocomplete="off" />
						<label for="name">Name</label>
						<input type="text" name="name" placeholder="GMail" autocomplete="off"/>
						<button type="submit">Create</button>
					</form>
				</li>
			</ul>
    </div>
  `) as HTMLDivElement;

	function insertButton(button: ChildNode | null) {
		if (!button || !element) return;
		const list = element.querySelector(".dialer-list");
		const addButton = element?.querySelector(".add-dialer-button");
		list?.insertBefore(button, addButton);
	}

	element?.addEventListener("submit", (e) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const url = formData.get("url")?.toString();
		const name = formData.get("name")?.toString();
		if (!url || !name) return;
		insertButton(dialerButton.create(name, url));
		form.reset();
	});

	element.addEventListener("click", (e) => {
		const target = e.target as HTMLButtonElement;
		if (target?.hasAttribute("data-remove-button")) {
			target.closest(".dialer-button")?.remove();
		}
	});

	return {
		element,
	};
})();

export { dialer };
