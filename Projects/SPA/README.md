# Express을 사용하여 Vanillajs로 SPA 페이지 만들기

<hr>

## Requirements

- node.js
- [express](https://www.npmjs.com/package/express)

### Express 설치하기

```
npm install express
```

## Process

### 1. Express로 웹 서버 구축

```
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server Running..."));

```

### 2. index.html

```
<script type="module" src="./static/js/index.js" ></script>
```

기본 html 틀을 만들고 헤더에 `script`을 추가. `type=module`로 지정하는 경우 여러가지 이점을 볼 수 있습니다.

- 지연실행
- use strict 모드로 실행
- 독립적인 scope 생성
- export, import을 통해 모듈간 데이터 공유

### [모듈을 사용하는 이유](https://ko.javascript.info/modules-intro)
