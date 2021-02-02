import define from "./lib/define.js"
import { p } from "./lib/jsh.js"

class UserCard extends HTMLElement {
  constructor() {
    super()
    
  }
  connectedCallback () {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" })
    }
    
    this.shadowRoot.appendChild(this.render())
  }
  render() {
    return (
     p({}, "Hello World")
    )
  }
}

// document.body.insertAdjacentHTML( 'beforeend', "<p>Test</p>");

define([
  { name: "user-card", extend: UserCard }
])