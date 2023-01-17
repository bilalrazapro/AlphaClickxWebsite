const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "No Long Term Contracts";
    }, 0);
    setTimeout(() => {
        text.textContent = "More Executed In Less Time";
    }, 2000);
    
    setTimeout(() => {
        text.textContent = "Consistent Traffic";
    }, 4000);
   
    
}
textLoad();
setInterval(textLoad, 6000);

const clr = document.querySelector('.sec-text').style.color = ('yellow')

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());