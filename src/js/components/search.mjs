import { getAllListingUrl } from "../url.mjs";
const searchBar = document.querySelector(".search__bar");
const container = document.querySelector(".container__card");

let searchArray = [];

searchBar.addEventListener("keyup", (e) => {
   const inputString = e.target.value.toLowerCase();
   const filterSearchArray = searchArray.filter((element) => {
      return element.title.toLowerCase().includes(inputString);
   });
   showSearchResult(filterSearchArray);
});

export async function searchApiCall() {
   try {
      const response = await fetch(getAllListingUrl, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });
      searchArray = await response.json();
   } catch (error) {
      console.log("error search api call");
   }
}

function showSearchResult(result) {
   const createHtml = result
      .map((element) => {
         return ` <div class="col-12 col-md-6 col-lg-4 mb-5">
      <div class="card position-relative shadow h-100">
      <a href="/specificprod.html?id=${element.id}">
          <img class="card-img-top card__size--img"
          src="${element.media[0]}"
          onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
          alt="image of the product"/>
      </a>
      <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light">                     
      ${element.endsAt}
      </h4>
      <div class="card-body position-relative">
      <a href="#"
      class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
      ><span class="position-absolute top-50 start-50 translate-middle fw-bold fs-4"> BID</span>
      </a>
      <h3 class="card-title text-center mt-4">${element.title}</h3>
      <p class="card-text text-center">269</p>
      </div>
      </div>
      </div> `;
      })
      .join("");

   container.innerHTML = createHtml;
}
