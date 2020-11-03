const slide_btn = document.querySelector('.slide_btn')
const slide_modal = document.querySelector('.slide_modal')
const close = document.querySelector('.close')
const btn_white = document.querySelector('.btn_white')
const banner_modal = document.querySelector('.banner_modal')
const banner_close = document.querySelector('.banner_close')

slide_btn.addEventListener('click', function() {
  console.log("slide_btn")
  slide_modal.classList.add('open')
})

close.addEventListener('click',function() {
  console.log("close")
  slide_modal.classList.remove('open')
})

btn_white.addEventListener('click',function(){
  console.log('btn_white')
  banner_modal.classList.add('open')
})

banner_close.addEventListener('click',function(){
  console.log('banner_close')
  banner_modal.classList.remove('open')
})