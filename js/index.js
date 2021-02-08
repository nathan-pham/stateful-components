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
  render() {
    return (
      div({},
        [
          this.state.count < 5
            ? h1({}, "Simple Button Component")
            : null
        ],
        button({
          onClick: this.increment
        }, "Count: " + this.state.count)
      )
    )
  }
}

define([
  { name: "s-button", extend: SButton }
])