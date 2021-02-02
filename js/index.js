import Component, * as jsh from "./lib/jsh.js"
import define from "./lib/define.js"

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
      jsh.button({
        onClick: this.increment
      }, `Count: ${ this.state.count }`)
    )
  }
}

define([
  { name: "s-button", extend: SButton }
])