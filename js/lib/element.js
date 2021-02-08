const createElement = (type, props={}, ...children) => {
  const element = document.createElement(type)

  for(const [ key, value ] of Object.entries(props)) {
    key.startsWith("on")
      ? element[key.toLowerCase()] = value
      : element.setAttributeNS(null, key, value)
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

const getAttributes = (attributes) => {
  let a = []
  for(let i = 0; i < attributes.length; i ++) {
    a.push(attributes[i].name)
  }
  return a
}

const createMap = (element, parent) => {
  if(!element) {
    return null
  }

  const type = element.nodeType == 3 ? "text" : element.tagName.toLowerCase()

  const vNode = {
    content: (element.childNodes && element.childNodes.length > 0) ? null : element.textContent,
    props: type !== "text" && element.hasAttributes() ? getAttributes(element.attributes) : [],
    node: element,
    parent,
    type,
  }

  vNode.children = [...element.childNodes].map(node => createMap(node, element))
  return vNode
}

export default createElement
export {
  createMap
}