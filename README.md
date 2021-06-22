# Stateful Components
Bringing reactive syntax to web components

## Installation

### Node
```
>>> npm install stateful-components
```
```js
import define, { jsh, props } from "stateful-components"
```

### Web
```js
import define, { jsh, props } from "https://unpkg.com/stateful-components@latest"
```

## Usage
### Define
`define` initializes new web components. It accepts two arguments, the component name and a JS object containing the component's methods. Components have several properties:
- state
- style(state, target)
- mount(state, target)
- unmount(state, target)
- render(start, target)

### State
Stateful web components are wrapped in a Proxy; directly modifying state will automatically trigger a DOM refresh. `stateful-components` is also powered by a robust diffing algorithm, allowing you to build performant and fast apps. 

### Style
Styles with web components are automatically scoped. With `stateful-components`, you can either supply a dynamic style function or just a normal string.

### Mount & Unmount
`mount` is called when the web component is first attached to the DOM.  
`unmount` is called when the web component is detached from the DOM.  
Use these methods to reference the actual element, apply event listeners, or make one-time edits to state.  

### Render
Anything returned from `render` is ultimately rendered onto the screen.

## Example Web Component
```javascript
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
    console.log("mounted")
  },

  unmount(state, target) {
    console.log("unmounted")
  }
})

// in html: <x-button></x-button>
```

## Example Components
- [badge](https://github.com/nathan-pham/badge-web-component)
- [console](https://github.com/nathan-pham/web-console)