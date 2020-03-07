// menu-hamburger ===========================================

const burgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".hamburger-nav");
const close = document.querySelector(".hamburger-menu-close");

burgerButton.addEventListener("click", function() {
  navigation.classList.toggle("active");
  document.body.classList.toggle("overflow");
});

close.addEventListener("click", function() {
  navigation.classList.toggle("active");
  document.body.classList.toggle("overflow");
});

// team-accordeon ===========================================

const teamMembers = document.querySelectorAll(".accordeon__item");

for (let i = 0; i < teamMembers.length; i++) {
  teamMembers[i].addEventListener("click", toogleClass);
}

function toogleClass(e) {
  e.preventDefault();
  if (
    e.target
      .closest(".accordeon__item")
      .classList.contains("accordeon__item--active") === false
  ) {
    for (let i = 0; i < teamMembers.length; i++) {
      teamMembers[i]
        .closest(".accordeon__item")
        .classList.remove("accordeon__item--active");
    }
    e.target
      .closest(".accordeon__item")
      .classList.add("accordeon__item--active");
  } else {
    e.target
      .closest(".accordeon__item")
      .classList.remove("accordeon__item--active");
  }
}

//menu - accordeon ===========================================

const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach((el, i) => {
  el.addEventListener("click", e => {
    e.preventDefault();

    el.classList.toggle("menu__item--active"); //

    menuItems.forEach((item, i) => {
      if (i !== i) {
        menuItems.classList.remove("menu__item--active");
      }
    });
  });
});

//menu-slider ===========================================

$(document).ready(function() {
  const owl = $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true
  });

  $(".scroll-btn-left").click(function(e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel");
  });

  $(".scroll-btn-right").click(function(e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel");
  });
});

// form ===========================================

const myForm = document.querySelector(".form");

console.log(myForm);

myForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(myForm);
  formData.append("to", "myExamplEmail@mail.ru");
  const request = new XMLHttpRequest();
  request.open("POST", "https://webdev-api.loftschool.com/sendmail");
  request.send(formData);
  request.addEventListener("load", function() {
    const responce = JSON.parse(request.response);
    console.log(responce);
  });
});

// menu-fixed-scroll ===========================================

var scrollLink = document.querySelectorAll(".scroll__item");

scrollLink.forEach(el =>
  el.addEventListener("click", function(e) {
    scrollLink.forEach(el => el.classList.remove("scroll__item--active"));
    el.classList.toggle("scroll__item--active");
  })
);

// fullpage-scroll ===========================================

// $("#fullpage").fullpage({
//   menu: "#menu"
// });

$(document).ready(function() {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: false
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});

// owl-carousel ===========================================

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true
  });
});

// overlay reviews ============================

let btn = document.querySelectorAll(".btn--color--black");
let overlyaElement = document.querySelector(".overlay");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", e => {
    overlyaElement.style.display = "flex";
    overlyaElement.querySelector(".text").innerHTML =
      e.target.previousElementSibling.firstElementChild.innerHTML;
  });
}

overlyaElement.querySelector(".close").onclick = () => {
  overlyaElement.style.display = "none";
};
