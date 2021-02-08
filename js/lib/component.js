import diff from "./diff.js"
import { createMap } from "./element.js"

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

    diff(
      createMap(this.shadowRoot.firstChild, this.shadowRoot),
      createMap(this.render(), this.shadowRoot)
    )
  }
  render() {}
}

export default Component