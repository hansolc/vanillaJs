export default class Component {
  state;
  constructor(element) {
    this.$target = document.createElement(element);
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  mount() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }
  setEvent() {}
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }
}
