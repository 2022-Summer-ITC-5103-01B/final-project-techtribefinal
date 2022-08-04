const $ = selector => document.querySelector(selector); 

const newspaperSpinning = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(1)' }
];
  
const newspaperTiming = {
    duration: 2000,
    iterations: Infinity
}

let ani;

const startSpin = (element) => {
    ani = element.currentTarget.animate(newspaperSpinning, newspaperTiming);
}

const stopSpin = () => {
    ani.cancel();
}

const smoothScroll = (element) => {
    document.querySelector(element.path[0].id.replace('menu_', '#')).scrollIntoView({
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /(ipad|iphone|tablet|android)/.test(userAgent);
    document.querySelectorAll("section img").forEach((element) => {
        element.addEventListener("click", smoothScroll);
        if (!isMobile) {
            element.addEventListener("mouseenter", startSpin);
            element.addEventListener("mouseleave", stopSpin);
        }
    })
});