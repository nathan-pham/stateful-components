const isClass = (v) => {
  return typeof v === 'function' && /^\s*class\s+/.test(v.toString())
}

const define = (classes) => {
  classes.forEach(({ name, element }) => {
    customElements.define(name, isClass(element) ? element : classConverter(element))
  })
}

// define([
//   { name: "render", extend: render }
// ])

const classConverter = (render) => {
  class Define extends HTMLElement {
    constructor() {
      super()

      this.render = render.bind(this)
    }
    useState(initial) {
      const setInitial = (newValue) => {
        initial = newValue
        diff(
          createMap(this.shadowRoot.firstChild, this.shadowRoot),
          createMap(this.render(), this.shadowRoot)
        )
      }
      return [
        initial,
        setInitial
      ]
    }
    connectedCallback() {
      if(!this.shadowRoot) {
        this.attachShadow({ mode: "open" })
      }


      this.shadowRoot.appendChild(this.render())    
    }
  }

  return Define
}

export default define