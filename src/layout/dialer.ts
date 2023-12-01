import { createElementFromString } from "../module/parser";

const dialer = (() => {
	const dialerList = [
		{
			name: "loganwoolf.dev",
			url: "https://loganwoolf.dev",
		},
	];

	const element = createElementFromString(`
    <div class="dialer">
      <h1>Speed Dial</h1>
    </div>
  `);

	return {
		dialerList,
		element,
	};
})();

export { dialer };
