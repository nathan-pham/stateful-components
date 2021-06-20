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

      this.styleElement = document.createElement("style")

      const stateHandler = {
        set: (obj, key, value) => {
          obj[key] = value
          
          diff(
            createMap(this.shadowRoot.firstChild, this.shadowRoot),
            createMap(render(this.state, this), this.shadowRoot)
          )

          this.setStyle()

          return true
        }
      }

      this.state = new Proxy(initialState || {}, stateHandler)
      this.shadowRoot.appendChild(render(this.state, this))

      if(style) {
        this.setStyle()
        this.shadowRoot.appendChild(this.styleElement)
      }
    }

    setStyle() {
      this.styleElement.textContent = typeof style == "function" ? style(this.state) : style
    }
  }

  customElements.define(name, Element)
}


export default define