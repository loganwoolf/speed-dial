import { dialer } from "./layout/dialer.ts";
import "./style.css";

const { element } = dialer;
const app = document.querySelector("#app");
if (app && element) {
	app.appendChild(element);
}
