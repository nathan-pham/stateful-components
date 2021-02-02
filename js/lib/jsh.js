const TEXT_ELEMENT = "TEXT_ELEMENT"

const createElement = (type, props={}, ...children) => {
  const element = document.createElement(type)
  
  for(const [ key, value ] of Object.entries(props)) {
    key.startsWith("on") 
      ? element.addEventListener(key.substring(2).toLowerCase(), value)
      : element.setAttribute(key, value)
  }

  children.flat().forEach(child => {
    element.appendChild(
      typeof child == "string"
        ? document.createTextNode(child)
        : child
    )
  })

  return element
}

const jsh = (type) => {
  return ((props, ...children) => {
    return createElement(type, props, children)
  })
}

class Component extends HTMLElement {
  constructor() {
    super()
    this.state = {}
  }
  connectedCallback() {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" })
    }

    this.shadowRoot.appendChild(this.render())
  }
  setState(newState) {
    Object.assign(
      this.state,
      typeof newState == "function" ? newState(this.state) : newState
    )

    this.shadowRoot.firstChild.replaceWith(this.render())
  }
  render() {}
}

export const a = jsh("a")
export const b = jsh("b")
export const i = jsh("i")
export const p = jsh("p")
export const q = jsh("q")
export const s = jsh("s")
export const br = jsh("br")
export const dd = jsh("dd")
export const dl = jsh("dl")
export const dt = jsh("dt")
export const em = jsh("em")
export const h1 = jsh("h1")
export const h2 = jsh("h2")
export const h3 = jsh("h3")
export const h4 = jsh("h4")
export const h5 = jsh("h5")
export const h6 = jsh("h6")
export const hr = jsh("hr")
export const li = jsh("li")
export const ol = jsh("ol")
export const rp = jsh("rp")
export const rt = jsh("rt")
export const td = jsh("td")
export const th = jsh("th")
export const tr = jsh("tr")
export const ul = jsh("ul")
export const bdi = jsh("bdi")
export const bdo = jsh("bdo")
export const col = jsh("col")
export const del = jsh("del")
export const dfn = jsh("dfn")
export const div = jsh("div")
export const img = jsh("img")
export const ins = jsh("ins")
export const kbd = jsh("kbd")
export const map = jsh("map")
export const nav = jsh("nav")
export const pre = jsh("pre")
export const rtc = jsh("rtc")
export const sub = jsh("sub")
export const sup = jsh("sup")
export const svg = jsh("svg")
export const wbr = jsh("wbr")
export const abbr = jsh("abbr")
export const area = jsh("area")
export const cite = jsh("cite")
export const code = jsh("code")
export const data = jsh("data")
export const form = jsh("form")
export const main = jsh("main")
export const mark = jsh("mark")
export const ruby = jsh("ruby")
export const samp = jsh("samp")
export const span = jsh("span")
export const time = jsh("time")
export const aside = jsh("aside")
export const audio = jsh("audio")
export const input = jsh("input")
export const label = jsh("label")
export const meter = jsh("meter")
export const param = jsh("param")
export const small = jsh("small")
export const table = jsh("table")
export const tbody = jsh("tbody")
export const tfoot = jsh("tfoot")
export const thead = jsh("thead")
export const track = jsh("track")
export const video = jsh("video")
export const button = jsh("button")
export const canvas = jsh("canvas")
export const dialog = jsh("dialog")
export const figure = jsh("figure")
export const footer = jsh("footer")
export const header = jsh("header")
export const iframe = jsh("iframe")
export const legend = jsh("legend")
export const object = jsh("object")
export const option = jsh("option")
export const output = jsh("output")
export const select = jsh("select")
export const source = jsh("source")
export const strong = jsh("strong")
export const address = jsh("address")
export const article = jsh("article")
export const caption = jsh("caption")
export const details = jsh("details")
export const section = jsh("section")
export const summary = jsh("summary")
export const picture = jsh("picture")
export const colgroup = jsh("colgroup")
export const datalist = jsh("datalist")
export const fieldset = jsh("fieldset")
export const menuitem = jsh("menuitem")
export const optgroup = jsh("optgroup")
export const progress = jsh("progress")
export const textarea = jsh("textarea")
export const blockquote = jsh("blockquote")
export const figcaption = jsh("figcaption")
export default Component