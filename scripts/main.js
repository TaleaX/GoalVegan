
let imgs = {
    1: "../assets/start.jpg",
    2: "../assets/oat-nutprotein-coffee.jpeg",
    3: "../assets/oat-cocoa-banana.jpeg"
}

function currentSlide(element, n) {
    let imgSlider = document.getElementById("bg-img-slider");
    let activeDots = document.getElementsByClassName("dot active");
    let length = activeDots.length;
    for (let i = 0; i < length; ++i) {
        activeDots[i].classList.remove("active");
    }
    imgSlider.style.backgroundImage = `url("${imgs[n]}")`;
    console.log(imgs[n]);
    element.classList.add("active");
}

function currentPage(element) {
    let activeNavs = document.getElementsByClassName("nav-elem active");
    let length = activeNavs.length;
    for (let i = 0; i < length; ++i) {
        activeNavs[i].classList.remove("active");
    }
    element.classList.add("active");
}
