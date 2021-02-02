const define = (classes) => {
  classes.forEach(({ name, extend }) => {
    customElements.define(name, extend)
  })
}

export default define