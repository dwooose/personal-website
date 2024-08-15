/*menu bar*/
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.classList.add("menu-visible");
}
function hideMenu() {
  navLinks.classList.remove("menu-visible");
}

/*Active navigation element*/
var header = document.getElementById("navLinks");
var tab = header.getElementsByClassName("navLinks");

for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

/*Active navigation element on scroll*/
const sections = document.querySelectorAll('#home, #portfolio, #skill, #about, #contact');

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector('.navbar a[href*="#{id}"]');
    if(
        currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight
    ){
        currentNavLink.classList.add("active");
    }else{
      currentNavLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollTracker);

/*Sticky Header*/
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/*Typed Text*/
var typed = new Typed(".text", {
  strings: [
    "A Third Year Computer Science Student",
    "Interested in Web Development",
    "Interested in DATA SCIENCE",
    "Interested in Machine Learning",
    "Interested sa 'yo^^ contact me now!",
    "Singer sa C.R.",
    "A Lover of Anime and KDrama",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
});

function myFunction() {
  alert("Thank you for messaging me! Pls wait for my email ^_^ thanks <3");
}