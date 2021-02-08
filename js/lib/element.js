const createElement = (type, props={}, ...children) => {
  const element = document.createElement(type)

  for(const [ key, value ] of Object.entries(props)) {
    key.startsWith("on")
      ? element[key.toLowerCase()] = value
      : element.setAttribute(key, value)
  }

  children.flat(Infinity).forEach(child => {
    if(child) {
      element.appendChild(
        typeof child == "string"
          ? document.createTextNode(child)
          : child
      )
    }
  })
  return element
}

const createMap = (element) => {
  return [...element.childNodes].map(node => {
    const vNode = {
      content: (node.childNodes && node.childNodes.length > 0) ? null : node.textContent,
      props: node.attributes || {},
      parent: element,
      type: node.nodeType == 3 ? "text" : node.tagName.toLowerCase()
      node,
    }

    details.children = createMap(node)
    return details
  })
}

export default createElement
export {
  createMap
}