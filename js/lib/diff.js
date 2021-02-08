// templateMap = oldNode
// newNode = newNode

const update = (oldNode, newNode) => {
  if(!newNode) {
    oldNode.remove()
  }

  const allAttributes = {
    ...oldNode.attributes,
    ...newNode.attributes
  }

  const setProp = (key, value) => {
    key.startsWith("on")
      ? oldNode[key.toLowerCase()] = value
      : oldNode.setAttribute(key, value)
  }

  const removeProp = (key) => {
    key.startsWith("on")
      ? oldNode[key.toLowerCase()] = ""
      : oldNode.setAttribute(key, "")
  }

  for(const key in allAttributes) {
    const oValue = oldNode.getAttribute(key)
    const nValue = newNode.getAttribute(key)

    // set a new value
    if(!oValue || oValue !== nValue) {
      setProp(key, nValue)
    }
    // remove a value
    else if(!nValue) {
      removeProp(key)
    }
  }
}

const diff = (oldNode, newNode, shadowRoot) => {
  console.log(oldNode, newNode)
  // update(oldNode, newNode)

  // for(const oChild of oldNode.childNodes) {
  //   for(const nChild of newNode.childNodes) {
  //     diff(oChild, nChild, oldNode)
  //   }
  // }

  // todo: update content 

    // if(![...oldNode.childNodes].includes(nChild)) {
      // shadowRoot.appendChild(nChild)
    // }

  // for(const node of oldNodes) {
  //   if(!newNodes.includes(node)) {
  //     node.remove()
  //   }
  // }
}

export default diff