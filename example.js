import define, { jsh } from "./js/index.js"

const buttonX = () => {
  const style = () => {
    return `
      button {
        color: red;
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