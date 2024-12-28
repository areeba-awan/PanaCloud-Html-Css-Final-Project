// this is script.js file for adding functionality in web

// A HUMBURGER FUNTIONALITY
const hamburger = document.getElementById("hamburger");

// FOR TOP LINE LIST
const topLinelist = document.getElementById("toplineRightside");

// FOR NAVBAR
const navhamburger =document.getElementById("navhamburger")

// FOR NAVBAR LIST
const navbarList =document.getElementById("navbarList");

// ADDING EVENT LISTENER 
hamburger.addEventListener('click', () => {
    topLinelist.classList.toggle('active');
  });

  navhamburger.addEventListener("click",()=>{
    navbarList.classList.toggle('active');
  })