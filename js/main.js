// toggle grid overlay if change checkbox
const checkbox = document.querySelector('input[type="checkbox"]')
const overlays = document.querySelectorAll('.grid-overlay')

const onChange = () =>
  Array.from(overlays).forEach((item) => item.classList.toggle('d-none'))

checkbox?.addEventListener('change', onChange)

// add CSS property "overflow-y: scroll;" to header and footer if main is scrollable horizontally
const htmlTag = document.getElementsByTagName('html')[0]
const headerTag = document.getElementsByTagName('header')[0]
const mainTag = document.getElementsByTagName('main')[0]
const footerTag = document.getElementsByTagName('footer')[0]

const isScrollableNode = (e) => {
  return e.offsetHeight < e.scrollHeight
}

const resizeHandler = () => {
  const isScrollableMain = isScrollableNode(mainTag)

  if (isScrollableMain) {
    htmlTag.style.overflowY = 'auto'
    htmlTag.style.scrollbarWidth = 'initial'
    htmlTag.style.scrollbarColor = 'initial'
    headerTag.style.overflowY = 'scroll'
    footerTag.style.overflowY = 'scroll'
  } else {
    htmlTag.style.overflowY = 'initial'
    htmlTag.style.scrollbarWidth = 'thin'
    htmlTag.style.scrollbarColor = '#7777c0 #e0e0e0'
    headerTag.style.overflowY = 'initial'
    footerTag.style.overflowY = 'initial'
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

window.addEventListener('resize', onResize, false)
