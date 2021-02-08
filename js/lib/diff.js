const update = (oldNode, newNode) => {
  if(oldNode.type == "text") {
    oldNode.parent.textContent = newNode.content
    return
  }
  
  const allAttributes = [
    ...oldNode.props,
    ...newNode.props
  ]

  const setProp = (key, value) => {
    key.startsWith("on")
      ? oldNode.node[key.toLowerCase()] = value
      : oldNode.node.setAttributeNS(null, key, value)
  }

  const removeProp = (key) => {
    key.startsWith("on")
      ? oldNode.node[key.toLowerCase()] = ""
      : oldNode.node.removeAttribute(key)
  }

  for(const key of allAttributes) {
    const oValue = oldNode.node.getAttribute(key)
    const nValue = newNode.node.getAttribute(key)

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

const diff = (oldNode, newNode) => {
  if(!newNode) {
    oldNode.node.remove()
  }
  else if(oldNode.children.length !== newNode.children.length) {
    oldNode.node.replaceWith(newNode.node)
  }
  else {
    update(oldNode, newNode)

    oldNode.children.forEach((child, index) => {
      diff(child, newNode.children[index])
    })
  }
}

export default diff