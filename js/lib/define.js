import diff from "./diff.js"
import { createMap } from "./element.js"

// TODO: onComponentMount / References

const f = (v) => typeof v == "function"

const define = (name, element) => {
  const { state, render, style, mount, unmount } = element

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

          if(style) {
            this.setStyle()
          }

          return true
        }
      }

      this.state = new Proxy(state || {}, stateHandler)
      this.shadowRoot.appendChild(render(this.state, this))

      if(style) {
        this.setStyle()
        this.shadowRoot.appendChild(this.styleElement)
      }
    }

    connectedCallback() {
      if(f(mount)) {
        mount(this.state, this)
      }
    }

    disconnectedCallback() {
      if(f(unmount)) {
        unmount(this.state, this)
      }
    }

    setStyle() {
      let newStyle = f(style) ? style(this.state) : style
      if(newStyle !== this.styleElement.textContent) {
        this.styleElement.textContent = newStyle
      }
    }
  }

  customElements.define(name, Element)
}


export default define