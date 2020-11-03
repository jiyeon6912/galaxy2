const slide_btn = document.querySelector('.slide_btn')
const slide_modal = document.querySelector('.slide_modal')
const close = document.querySelector('.close')

slide_btn.addEventListener('click', function() {
  console.log("hahaha")
  slide_modal.classList.add('open')
})

close.addEventListener('click',function(){
  slide_modal.classList.remove('open')
})