const { createRenderer } = require("./packages/vue-server-renderer/build.dev");

const Vue = require("./dist/vue");

const renderer = createRenderer();
const VNODE_AMOUNT = 500000;
const TIME_ID = `renderToString ${VNODE_AMOUNT}个vnode节点总耗时`;
console.time(TIME_ID);

const child = {
  render(h) {
    const div = h("div", {}, "child");
    return div;
  },
  created() {
    console.log("child created");
  },
};

const root = new Vue({
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
});

renderer.renderToString(root, (error, html) => {
  // console.log("render done", html);
  if (!error) {
    console.timeEnd(TIME_ID);
    // console.log("html", html);
  } else {
    console.log("error", error);
  }
});
