/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})


navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')


searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})


searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

$(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        responsive: {
          0: {
            items: 1
          },
          300:{
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    });





const phrases = [
  "Software Development",
  "Nearshore Development",
  "Offshore Development",
  "New Product Development",
  "Quality Assurance",
  "Web App Development",
  "Mobile App Development",
  "MVP Development",
  "Agile Development",
  "System Modernization",
  "Digital Implementation & Delivery",
  "Product Engineering",
  "DevOps & SecOps",
  "Salesforce Development",
  "Databricks Integration",
  "Data Engineering",
  "Analytics & Platform Implementation",
  "Cloud Migration",
  "Google Cloud Migration",
  "AWS Infrastructure Development",
  "OpenAI Integration",
  "Google AI Integration",
  "Mistral AI Integration",
  "DALL-E Integration"
];

let index = 0;
const textElement = document.getElementById("list-of-words");

setInterval(() => {

  textElement.style.transition = "opacity 0.5s ease-in-out";
  textElement.style.opacity = 0;

  setTimeout(() => {

    index = (index + 1) % phrases.length;
    textElement.textContent = phrases[index];

    textElement.style.opacity = 1;
  }, 500); 
}, 3000); 

