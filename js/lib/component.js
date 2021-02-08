import diff from "./diff.js"
import { createMap } from "./element.js"

class Component extends HTMLElement {
  constructor() {
    super()
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" })
    }
    
    this.state = {}
  }
  connectedCallback() {

    this.shadowRoot.appendChild(this.render())

    if(this.style) {
      let styleElement = document.createElement("style")
      styleElement.textContent = this.style()
      this.shadowRoot.appendChild(styleElement)
    }
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