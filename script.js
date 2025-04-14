// add suport css aniamtion redraw
// https://css-tricks.com/restart-css-animation/
DOMTokenList.prototype.redraw = function(token) {
  this.remove(token)
  document.body.offsetWidth
  this.add(token)
}


document.addEventListener('DOMContentLoaded', () => {
  const pulse = document.querySelector('.card .hint .pulse')
  const wrapper = document.querySelector('#wrapper')
  const hint = document.querySelector('.hint')

  document.querySelector('.icon-info').addEventListener('click', () => {
    hint.classList.toggle('open')
    wrapper.classList.toggle('show')
    pulse.classList.redraw('anima')
  })



  // preview
  setTimeout((() => {
    document.querySelector('.icon-info').click()
  }), 800)

  setTimeout((() => {
    document.querySelector('.icon-info').click()
  }), 2000)
})