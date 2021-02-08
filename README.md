# Stateful Components
Fuse web components with reactive, component syntax

## Usage
Once you write a component class and pass it into the `define` function, you can use your new web component in standard HTML. 

### Example Button App
```javascript
import Component, { define, jsh } from "stateful-components"

const { button } = jsh

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
  { name: "s-button", element: SButton }
])
```

## TODO
* publish helpers to NPM

## Complete
* diffing algorithm (currently just replaces element)
