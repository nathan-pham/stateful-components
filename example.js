import define from "./lib/define.js"
import Component from "./lib/component.js"
import { h1, div, button } from "./lib/jsh.js"

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
  style() {
    return (`
      h1 {
        color: red;
      }    
    `)
  }
  render() {
    return (
      div({},
        h1({}, this.state.count < 5 ? "Button App" : "You really like clicking don't you."),
        button({
          onClick: this.increment
        }, "Count: " + this.state.count),
        [
          this.state.count > 5
            ? button({
              onClick: this.increment
            }, "button # 2")
            : null
        ]
      )
    )
  }
}

define([
  { name: "s-button", element: SButton }
])