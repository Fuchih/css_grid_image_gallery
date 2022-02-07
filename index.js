const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay')
const overlayImage = document.querySelector('.img')
const overlayClose = document.querySelector('.close')

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="https://picsum.photos/id/${randomNumber(85)}/500/500" />
      <div class="item__overlay">
      </div>
    </div>
  `
}

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
])

const html = digits.map(generateHTML).join('')
gallery.innerHTML = html

const items = document.querySelectorAll('.item')
items.forEach((item) => item.addEventListener('click', handleClick))

overlayClose.addEventListener('click', close)

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1
}

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src
  overlayImage.src = src
  overlay.classList.add('open')
}

function close() {
  overlay.classList.remove('open')
}
