import diff from "./diff.js"
import { createMap } from "./element.js"

const define = (name, element) => {
  const { initialState, render, style } = typeof element == "function" ? element() : element

  class Element extends HTMLElement {
    constructor() {
      super()

      if(!this.shadowRoot) {
        this.attachShadow({ mode: "open" })
      }

      const stateHandler = {
        set: (obj, key, value) => {
          obj[key] = value
          diff(
            createMap(this.shadowRoot.firstChild, this.shadowRoot),
            createMap(render(this.state, this.attributes), this.shadowRoot)
          )
          return true
        }
      }

      this.state = new Proxy(initialState || {}, stateHandler)
      this.shadowRoot.appendChild(render(this.state, this.attributes))

      if(style) {
        let styleElement = document.createElement("style")
        styleElement.textContent = style()
        this.shadowRoot.appendChild(styleElement)
      }
    }
  }

  customElements.define(name, Element)
}


export default define