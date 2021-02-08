import { terser } from "rollup-plugin-terser"

export default {
  input: "js/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    plugins: [ terser() ]
  }
}