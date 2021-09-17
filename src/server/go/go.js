const fs = require("fs");
const path = require("path");
const wasmBuffer = fs.readFileSync(
  path.resolve("./packages/vue-server-renderer", "go.wasm")
);

require(path.resolve("./packages/vue-server-renderer/tinygo_wasm_exec"));
function add(to) {
  let sum
  for (let i = 0; i < to; i++) {
    sum += i
  }
  return sum
}
// eslint-disable-next-line
const go = new Go();

WebAssembly.instantiate(wasmBuffer, go.importObject).then(function ({
  instance: wasm,
}) {
  go.run(wasm);
  console.time('go global');
  const LOOP_TIMES = 100000
  for (let i = 0; i < LOOP_TIMES; i++) {
    const result = global.xxx(10000);
  }
  console.timeEnd('go global');

  console.time('go export');
  for (let i = 0; i < LOOP_TIMES; i++) {
    const result = wasm.exports.add(10000);
  }
  console.timeEnd('go export');

  console.time('node');
  for (let i = 0; i < LOOP_TIMES; i++) {
    const result = add(10000);
  }
  console.timeEnd('node');
  // console.log("go result", result);
  // const { threads } = wasm.exports;
  // threads();
});
