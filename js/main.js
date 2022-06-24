// toggle grid overlay if change checkbox
const checkbox = document.querySelector('input[type="checkbox"]')
const overlays = document.querySelectorAll('.grid-overlay')

const onChange = () => Array.from(overlays).forEach((item) => item.classList.toggle('d-none'))

checkbox?.addEventListener('change', onChange)


// add CSS property "overflow: scroll;" to header and footer if main is scrollable
const header = document.getElementsByTagName('header')[0]
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

const isScrollableNode = (e) => {
  return (e.offsetHeight < e.scrollHeight)
}

const isScrollableMain = isScrollableNode(main)

if (isScrollableMain) {
  header.style.overflowY = 'scroll'
  footer.style.overflowY = 'scroll'
}
