import { SimpleGreeting } from "./components/simple-greeting";

document.getElementById("Title")?.insertAdjacentHTML("afterbegin", "<span>Hello, World!</span>");
console.log("Hello, World!");