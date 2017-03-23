require('./styles/globals.scss')
    // require('index.html')
const slick = require('slick-carousel')

const $ = require('jquery')

$(() => {
    let viewportHeight
    let pageHeight

    function resize() {
        viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        pageHeight = document.documentElement.scrollHeight
    }

    resize()
    window.addEventListener('resize', resize)

    window.addEventListener('scroll', () => {
        const scrollPos = document.body.scrollTop;
        const scrollPourcent = Math.round(scrollPos / (pageHeight - viewportHeight) * 100)
        $('#progress-bar').css('width', scrollPourcent + '%')
    })

    $(".carousel").slick()

    $('a.audio').click((event) => {
        const balTragique = event.target.getElementsByTagName('audio')[0]
        if(balTragique.paused) {
            balTragique.play()
            event.target.classList.add('play')
        }
        else {
            balTragique.pause()
            event.target.classList.remove('play')
        }
    })
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
