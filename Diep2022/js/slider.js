// const swiper1 = new Swiper(".slider-1", {
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     grabCursor: true,
//     effect: "fade",
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-next",
//         prevEl: ".swiper-prev",
//     },
// });

// const swiper2 = new Swiper(".slider-2", {
//     // loop: true,
//     grabCursor: true,
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".custom-next",
//         prevEl: ".custom-prev",
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         1024: {
//             slidesPerView: 4,
//         },
//     },
// });

// const swiper3 = new Swiper(".slider-3", {
//     loop: true,
//     grabCursor: true,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
//     spaceBetween: 30,
//     slidesPerView: 2,
//     breakpoints: {
//         768: {
//             slidesPerView: 3,
//         },
//         1024: {
//             slidesPerView: 5,
//         },
//     },
// });

// const swiper4 = new Swiper(".slider-4", {
//     // loop: true,
//     grabCursor: true,
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".custom-next",
//         prevEl: ".custom-prev",
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         1024: {
//             slidesPerView: 4,
//         },
//     },
// });

// const swiper5 = new Swiper(".slider-5", {
//     loop: true,
//     grabCursor: true,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
//     spaceBetween: 30,
//     slidesPerView: 2,
//     breakpoints: {
//         768: {
//             slidesPerView: 3,
//         },
//         1024: {
//             slidesPerView: 5,
//         },
//     },
// });


const rightbtn = document.querySelector('.bx-chevron-right')
const leftbtn = document.querySelector('.bx-chevron-left')

const imgNumber = document.querySelectorAll('.slider-content-left-top img')
console.log(imgNumber.length)

let index = 0
rightbtn.addEventListener("click", function() {
    index = index + 1
    if (index > imgNumber.length - 1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})

leftbtn.addEventListener("click", function() {
    index = index + 1
    if (index <= 0) {
        index = imgNumber.length - 1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})



///////////////////////////////////////////////////////

const rightbtntwo = document.querySelector('.bx-chevron-right-two')
const leftbtntwo = document.querySelector('.bx-chevron-left-two')
const imgNumbertow = document.querySelectorAll('.slider-product-one-content-items')

rightbtntwo.addEventListener("click", function() {
    index = index + 1
    if (index > imgNumbertow.length - 1) {
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})

leftbtntwo.addEventListener("click", function() {
    index = index + 1
    if (index <= 0) {
        index = imgNumbertow.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})