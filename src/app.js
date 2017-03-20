require('./styles/globals.scss')
require('./index.html')

const $ = require('jquery')

let viewportHeight
let pageHeight

function resize() {
  viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  pageHeight = $(document).height()
}

resize()
window.addEventListener('resize', resize)

window.addEventListener('scroll',() => {
  const scrollPos = document.body.scrollTop;
  const scrollPourcent = Math.round(scrollPos/(pageHeight-viewportHeight)*100)
  $('#progress-bar').css('width',scrollPourcent + '%')
})
// const ScrollMagic = require('scrollmagic')

// const controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave'
//     }
// })

// const slides = document.querySelectorAll('section')

// for (var i = 0; i < slides.length; i++) {
//     new ScrollMagic.Scene({
//             triggerElement: slides[i]
//         })
//         .setPin(slides[i])
//         .addIndicators()
//         .addTo(controller)
// }

// const scrollProgress = new ScrollMagic.Scene({
//     triggerElement: 'main',
//     duration: 200
// })
// .addIndicators()
// .addTo(controller)
// .on('progress',(e) => {
//   console.log(e.progress.toFixed(3))
// })
