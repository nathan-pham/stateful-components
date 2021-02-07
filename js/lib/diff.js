const createMap = (element, svg) => {
  return [...element.childNodes].map(node => {
    const details = {
      content: (node.childNodes && node.childNodes.length > 0) ? null : node.textContent,
			attrs: node.nodeType !== 1 ? [] : Object.keys(node.attributes),
			type: node.nodeType === 3 
        ? "text" 
        : (node.nodeType === 8 
          ? "comment"
          : node.tagName.toLowerCase()),
			node
    }

    details.svg = svg || details.type == "svg"
    details.children = createMap(node, details.svg)
    return details
  })
}

const diff = (oldNode, newNode) => {
  console.log(oldNode, "oldNode")
  console.log(newNode, "newNode")
}

export default diff
export {
  createMap
}