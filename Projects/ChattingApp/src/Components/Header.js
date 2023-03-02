import Component from "@core/Component.js";

export default class Header extends Component {
  constructor($target) {
    super($target);
  }

  template() {
    return `
        <div>header</div>
      `;
  }
}
