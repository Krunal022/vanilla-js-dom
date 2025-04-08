// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });
  
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > lastScrollY) {
        navbar.style.top = "-120px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
});
