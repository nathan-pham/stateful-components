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

const createMap = (element, parent) => {
  if(!element) {
    return null
  }

  const vNode = {
    content: (element.childNodes && element.childNodes.length > 0) ? null : element.textContent,
    props: Object.keys(element.attributes || {}),
    type: element.nodeType == 3 ? "text" : element.tagName.toLowerCase(),
    node: element,
    parent,
  }

  vNode.children = [...element.childNodes].map(node => createMap(node, element))
  return vNode
}

export default createElement
export {
  createMap
}