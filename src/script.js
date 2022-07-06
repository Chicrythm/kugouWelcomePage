/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-06-28 22:12:58
 * @LastEditors: yzq
 */

window.addEventListener('scroll', (e) => {
  // console.log('test')
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  let $h1 = document.querySelector('h1')
  let $theChip = document.querySelector('#the-chip')
  let $chipMask = document.querySelector('.chip-mask')
  // console.log('$theChip',$theChip)
  let $Kugou = document.querySelector('#kugou')
  let $A13TextBg = document.querySelector('#the-chip .text-bg')
  
  // 让图片跟随 scroll 程度变化大小
  $theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled) + 'px'

  if (scrolled <= 0.1) {
    // 透明度从 1 - 0 变化·
    $h1.style.opacity = (0.1 - scrolled) / 0.1
    // 利用负上外边距让元素往上移动
    $h1.style.marginTop = scrolled * 1000 * -1 + 'px'
  } else {
    $h1.style.opacity = 0
  }
  
  if (scrolled <= 0.2) {
    $Kugou.style.opacity = (scrolled - 0.1) / 0.1
  } else {
    $Kugou.style.opacity = 1
  }
  
  if (scrolled >= 0.5) {
    $A13TextBg.style.opacity = (1 - scrolled) / 0.5
    $chipMask.style.opacity = (1 - scrolled) / 0.5
    // 先让底层 css 设置背景为 transparent
    $theChip.classList.add('transparent')
  } else {
    $A13TextBg.style.opacity = 1
    $theChip.classList.remove('transparent')
  }

  console.log(scrolled)
  if (scrolled >= 0.80) {
    $theChip.style.opacity = (1 - scrolled) / 0.2
    if(scrolled > 0.90) {
      $theChip.style.opacity = 0
    }
  } else {
    $theChip.style.opacity = 1
  }
  
})