import "./index.css";
import Header from "@Components/Header.js";

const $root = document.getElementById("root");
const $header = new Header("div");
$root.appendChild($header.$target);
