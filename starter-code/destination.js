import data from "./data.js";
const { destinations, crew, technology } = data;

const tablistContent = document.getElementById("destination-tablist-div");
const imageContent = document.getElementById("destination-image-div");
const descriptionContent = document.getElementById("main-description-div");
const destinationPlanet = document.querySelector(
  ".grid-container--destination"
);

const destinationContentSwapper = (ID) => {
  let planetID = ID || "Moon";
  const planetResult = destinations.find(({ name }) => name === planetID);
  console.log(planetID);
  const { name, images, description, distance, travel } = planetResult;
  const planetImage = images.webp;

  // segment displayPlanet so that the tab-list never reloads

  let mainTextDiv = `<h1 class="fs-900 uppercase ff-serif text-white home-text">${name}</h1>
        <p
          class="text-accent text-limiter fs-400 ff-sans-normal"
          style="line-height: 1.75rem"
        >
          ${description}
        </p>
        <div class="destination-spacer"></div>

        
        <div class="destination-details">
          <div class="flex destination-details-text">
            <p
              class="fs-300 text-accent ff-sans-cond uppercase letter-spacing-2"
            >
              Avg. Distance
            </p>
            <p class="fs-500 ff-serif uppercase">${distance}</p>
          </div>
          <div
            class="flex destination-details-text"
            style="flex-direction: column"
          >
            <p
              class="fs-300 text-accent ff-sans-cond uppercase letter-spacing-2"
            >
              est. travel time
            </p>
            <p class="fs-500 ff-serif uppercase">${travel}</p>
          </div>
        </div>`;

  tablistContent.innerHTML = tabListDiv;
  imageContent.innerHTML = destinationImageDiv;
  descriptionContent.innerHTML = mainTextDiv;
  // let displayPlanet = `
  //     <div id="destination-image-div" class="flex destination-div" style="flex-direction: column">
  //       ${destinationImageDiv}
  //     </div>

  //     <div id="destination-tablist-div" class="main-text">
  //       ${tabListDiv}
  //       </div>
  //       <div id="main-description-div">
  //       ${mainTextDiv}
  //       </div>
  //     `;
  // destinationPlanet.innerHTML = displayPlanet;
};
// console.log(displayPlanet);

export { destinationContentSwapper };
