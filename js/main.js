const checkbox = document.querySelector('input[type="checkbox"]')
const overlays = document.querySelectorAll('.grid-overlay')

const onChange = () => Array.from(overlays).forEach((item) => item.classList.toggle('d-none'))

checkbox?.addEventListener('change', onChange)
