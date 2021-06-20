import define, { jsh } from "./js/index.js"

const buttonX = () => {
  const style = (state) => {
    return `
      button {
        color: ${state.count % 2 == 0 ? "red" : "blue"};
      }
    `
  }

  const render = (state, props) => {
    return (
      jsh.button({
        onClick: () => state.count = state.count + 1
      }, "Count: " + state.count)
    )
  }

  return {
    render,
    style,
    initialState: {
      count: 0
    }
  }
}

define("x-button", buttonX)