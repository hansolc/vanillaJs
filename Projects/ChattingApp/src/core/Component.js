export default class Component {
  constructor($target) {
    this._$target = $target;
    this.render();
  }
  template() {
    return "";
  }
  render() {
    this._$target.innerHTML = this.template();
  }
}
