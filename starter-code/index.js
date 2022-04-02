// import data from "./data.js";
import { destinationContentSwapper } from "./destination.js";
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// const { destinations, crew, technology } = data;

// let planetID = "Moon";

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// const tabber = (tabs, bts) => {
//   tabs.addEventListener("click", (e) => {
//     let id = e.target.id;
//     console.log(id);
//     if (id) {
//       bts.forEach((btn) => {
//         btn.setAttribute("aria-selected", false);
//         btn.classList.remove("active");
//       });
//       const element = document.getElementById(id);
//       element.setAttribute("aria-selected", true);
//       element.classList.add("active");
//     }
//     planetID = id;
//     destinationContentSwapper(planetID);
//   });
// };

destinationContentSwapper();
const tabList = document.querySelector(".tab-list");
const btns = document.querySelectorAll(".tab-btn");

tabList.addEventListener("click", (e) => {
  const id = e.target.id;
  console.log(id);
  if (id) {
    btns.forEach((btn) => {
      btn.setAttribute("aria-selected", false);
      btn.classList.remove("active");
    });
  }
  const element = document.getElementById(id);
  element.setAttribute("aria-selected", true);
  element.classList.add("active");
  let planetID = id;
  destinationContentSwapper(planetID);
});

// tabber(tabList, btns);

// window.addEventListener("DOMContentLoaded", () => {

//
//
//   // tabListSwitcher();
//   // displayContent();
// });

// window.addEventListener("DOMContentLoaded", () => {
//   // interpolate these values into the html page
//   const planetResult = destinations.find(({ name }) => name === id);
//   const { name, images, description, distance, travel } = planetResult;
//   const planetImage = images.png;
//   console.log(name);
//   console.log(planetImage);
//   console.log(description);
//   console.log(distance);
//   console.log(travel);

//   console.log(destinations[1]);
// });
