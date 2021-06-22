import define, { jsh, props } from "./dist/index.js"

define("x-button", {
  state: { count: 0 },

  style(state) {
    return `
      button {
        color: ${state.count % 2 == 0 ? "red" : "blue"};
      }
    `
  },

  render(state, target) {
    console.log(props(target))

    return jsh.button({
      onClick: () => state.count = state.count + 1
    }, "Count: " + state.count)
  },
  
  mount(state, target) {
    console.log('test')
  },

  unmount(state, target) {
    console.log("ok")
  }
})