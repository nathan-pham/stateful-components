const define = (classes) => {
  classes.forEach(({ name, element }) => {
    customElements.define(name, element)
  })
}

export default define