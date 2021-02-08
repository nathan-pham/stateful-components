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