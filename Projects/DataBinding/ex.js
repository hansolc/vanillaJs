class Observable {
  constructor(value) {
    this._listeners = [];
    this._value = value;
  }

  // 4. Computed 인스턴스를 생성했을 때 넣어둔 함수 실행
  // () => first.value, last.value가 다시 실행 되어
  // Computed 인스턴스의 값을 갱신
  notify() {
    this._listeners.forEach((listener) => listener(this._value));
  }

  subscribe(listener) {
    this._listeners.push(listener);
  }

  get value() {
    return this._value;
  }

  // 3. hansol !== Doran 조건에 만족하므로 notify() 함수 실행
  set value(val) {
    if (this._value !== val) {
      this._value = val;
      this.notify();
    }
  }
}

class Computed extends Observable {
  constructor(value, deps) {
    super(value());
    const listener = () => {
      this._value = value();
      this.notify();
    };
    // 1.
    // full 객체가 생성되는 시점에 first, last 각 객체의 listener 프로퍼티에
    // full 이 갱신되는 리스너를 등록
    // ex) first: {listeners: [() => this._value = value(); this.notify()]}
    deps.forEach((dep) => dep.subscribe(listener));
  }
}

const first = new Observable("hansol");
const last = new Observable("choi");
const full = new Computed(() => `${first.value} ${last.value}`, [first, last]);
// 2. first 객체에서 setter 호출
first.value = "Doran";
console.log(full.value);
// 6. hansol choi => Doran choi 로 변경
