declare module 'server/go/go.wasm' {
  declare module.exports: Buffer;
}

declare module './tinygo_wasm_exec' {
  declare module.exports: any;
}


declare var Go: any
declare var WebAssembly: any

