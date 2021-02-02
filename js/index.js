import define from "./lib/define.js"
import * as jsh from "./lib/jsh.js"

class Component extends HTMLElement {
  constructor() {
    super()
    this.state = {}
  }
  connectedCallback() {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" })
    }

    this.shadowRoot.appendChild(this.render())
  }
  setState(newState) {
    Object.assign(
      this.state,
      typeof newState == "function" ? newState(this.state) : newState
    )

    this.shadowRoot.firstChild.replaceWith(this.render())
  }
  render() {}
}

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

// document.body.insertAdjacentHTML( 'beforeend', "<p>Test</p>");

define([
  { name: "s-button", extend: SButton }
])