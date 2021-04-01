# Stateful Components
Bringing reactive syntax to web components

## Installation
For npm:  
```
npm install stateful-components
```
For web:  
```js
import define, { jsh } "https://unpkg.com/stateful-components@latest"
```

## Define
`define` initializes new web components. It accepts two arguments, the component name and a JS object containing the component's methods. Components have three properties: `initialState`, `style(state)`, and `render(state, element)`. 

## State
Stateful web components are wrapped in a Proxy; directly modifying state will automatically trigger a DOM refresh. `stateful-components` is powered by a robust diffing algorithm so you can build performant and fast apps. 

## Example Usage
```javascript
// example.js
import define, { jsh } from "stateful-components"
const { button } = jsh

define("x-button", {
  initialState: { count: 0 },
  style() {
    return `
      button {
        color: red;
      }
    `
  },
  render(state) {
    return (
      button({ onClick: () => state.count += 1 }, `Count: ${ state.count }`)
    )
  }
})
```
```html
<!-- index.html -->
<script type="module" src="/example.js"></script>
<x-button>></x-button>
```

## Example Components
- [badge](https://github.com/nathan-pham/badge-web-component)
