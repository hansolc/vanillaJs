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
    console.log("subs: ", this);
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
    deps.forEach((dep) => dep.subscribe(listener));
  }

  get value() {
    return this._value;
  }

  set value(_) {
    console.log("!");
    throw "Cannot set in Computed values";
  }
}

const bind = {};
bind.first = new Observable("Hansol");
bind.last = new Observable("Choi");
bind.full = new Computed(
  () => `${bind.first.value} ${bind.last.value}`,
  [bind.first, bind.last]
);

// 1. first, last, full 각 Element 노드를 가져온다.
document.querySelectorAll("[data-bind]").forEach((elem) => {
  const obs = bind[elem.getAttribute("data-bind")];
  // 2. 인스턴스 생성 시 초기값으로 지정했던 값을 각 Element 값에 넣어준다.
  elem.value = obs.value;
  // 3. 각 인스턴스의 리스너 등록
  obs.subscribe(() => (elem.value = obs.value));
  // 4. 사용자가 input필드에 작성을 하면 obs.value을 변경하는 리스너를 등록한다.
  // 5. 이제 사용자가 입력 시 마다 first, last 인스턴스의 setter 함수를 호출한다.
  // full인스턴스를 생성 했을 때 각 first, last 객체에 등록해 둔 full 인스턴스의 value 값을
  // 변경하는 리스너를 실행하여 변화를 감지한다.
  elem.onkeyup = () => (obs.value = elem.value);
});
