# Stateful Components
Fuse web components with reactive, component syntax

## Usage
Once you write a component class and pass it into the `define` function, you can use your new web component in standard HTML. 

### Example Button App
```javascript
import define, { jsh } from "stateful-components"

const buttonX = () => {
  const initialState = {
    count: 0
  }

  const style = () => {
    return `
      button {
        color: red;
      }
    `
  }

  const render = (state) => {
    return (
      jsh.button({
        onClick: () => state.count = state.count + 1
      }, "Count: " + state.count)
    )
  }

  return {
    initialState
    render,
    style
  }
}

define("x-button", buttonX)
```

## TODO
* publish helpers to NPM

## Complete
* diffing algorithm (currently just replaces element)
