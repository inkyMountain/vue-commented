// const { createRenderer } = require("./build.dev");
const { createRenderer } = require("./build.prod");

// const Vue = require("./dist/vue");
const Vue = require("../../dist/vue");

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
   <!--vue-ssr-outlet-->
</body>
</html>
`;
const normalRenderer = createRenderer({
  template,
});
const VNODE_AMOUNT = 5000;

const child = {
  render(h) {
    const div = h("div", {}, "child");
    return div;
  },
  created() {},
};

const rootOptions = {
  components: {
    child,
  },
  data() {
    return {
      hello: "world",
    };
  },
  beforeCreate() {},
  created() {
    this.hello = "world2";
  },
  render(h) {
    const inner = new Array(VNODE_AMOUNT).fill(0).map((_, index) => {
      return h("div", {}, index + this.hello);
    });
    const child1 = h("child");
    const child2 = h("child");
    return h("div", {}, [...inner, child1, child2]);
  },
};

const rustRenderer = createRenderer({
  template,
  useRust: true,
});
const RUST_TIME_ID = `Bench: rustRenderer, vnodeAmount: ${VNODE_AMOUNT}`;
console.time(1 + RUST_TIME_ID);

rustRenderer.renderToString(new Vue(rootOptions), (error, html) => {
  if (!error) {
    console.timeEnd(1 + RUST_TIME_ID);
    // console.log("html", html);
  } else {
    console.log("error", error);
  }
});

const NORMAL_TIME_ID = `Bench: normalRenderer, vnodeAmount: ${VNODE_AMOUNT}`;
console.time(1 + NORMAL_TIME_ID);
normalRenderer.renderToString(new Vue(rootOptions), (error, html) => {
  if (!error) {
    console.timeEnd(1 + NORMAL_TIME_ID);
    // console.log("html", html);
  } else {
    console.log("error", error);
  }
});
