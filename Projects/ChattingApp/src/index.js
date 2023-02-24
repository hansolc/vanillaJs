import "./index.css";
import Component from "./core/Component.js";

const $root = document.getElementById("root");

class Header extends Component {
  constructor($target) {
    super($target);
  }

  template() {
    return `
      <div>header</div>
    `;
  }
}

new Header($root);
