require('./styles/globals.scss')

const $ = require('jquery')

const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
const pageHeight = $(document).height()

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
