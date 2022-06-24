// toggle grid overlay if change checkbox
const checkbox = document.querySelector('input[type="checkbox"]')
const overlays = document.querySelectorAll('.grid-overlay')

const onChange = () => Array.from(overlays).forEach((item) => item.classList.toggle('d-none'))

checkbox?.addEventListener('change', onChange)


// add CSS property "overflow-y: scroll;" to header and footer if main is scrollable horizontally
const header = document.getElementsByTagName('header')[0]
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

const isScrollableNode = (e) => {
  return (e.offsetHeight < e.scrollHeight)
}

const resizeHandler = () => {
  const isScrollableMain = isScrollableNode(main)

  if (isScrollableMain) {
    header.style.overflowY = 'scroll'
    footer.style.overflowY = 'scroll'
  } else {
    header.style.overflowY = 'initial'
    footer.style.overflowY = 'initial'
  }
}

let resizeTimeout

const onResize = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      resizeHandler()
    }, 66)
  }
}

onResize()

window.addEventListener("resize", onResize, false)
