# Stateful Components
Easily create extendable components with React-like syntax.

## Usage
Once you write a component class and pass it into the `define` function, you can use your new web component in standard HTML. 

### Example Button App
```javascript
import define from "./lib/define.js"
import Component, { button } from "./lib/jsh.js"

class SButton extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState(state => {
      return {
        count: state.count + 1
      }
    })
  }
  render() {
    return (
      button({
        onClick: this.increment
      }, `Count: ${ this.state.count }`)
    )
  }
}

define([
  { name: "s-button", extend: SButton }
])
```

## TODO
* diffing algorithm (currently just replaces element)
* `useState` functional components instead of classes 
* publish helpers to NPM