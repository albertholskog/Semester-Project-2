import { getAllListingUrl } from "../url.js";
import { timeformat } from "./timeformat.js";
import { apiCall } from "./apiCall.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";
import { sortArray } from "./sort.js";
const searchBar = document.querySelector(".search__bar");
const containerSearch = document.querySelector(".container__card");

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
      searchArray = await apiCall(getAllListingUrl, "GET");
   } catch (error) {
      console.log("error search api call");
      containerSearch.innerHTML = displayErrorMessage(
         "Search result error occurred"
      );
   }
}

function showSearchResult(result) {
   const createHtml = result
      .map((element) => {
         const [
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining,
         ] = timeformat(`${element.endsAt}`);
         sortArray(element.bids);
         if (element.bids.length === 0) {
            return ` <div class="col-12 col-md-6 col-lg-4 mb-4 rounded-bottom">
            <div class="card position-relative shadow h-100 bg-ligth border-0 rounded-bottom bg-light">
                <a href="./specificprod.html?id=${element.id}">
                    <img class="card-img-top card__size--img"
                    src="${element.media[0]}"
                    onerror="this.src ='./image/errorimg.jpg';"
                    alt="image of the product"/>
                    </a>
                    <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light rounded-1"> 
                    <span class="me-1 text-success fw-light">${daysRemaining}d </span>                    
                    <span class="me-1 text-success fw-light">${hoursRemaining}h </span>                    
                    <span class="me-1 text-success fw-light">${minuteRemaining}m </span>                    
                    <span class="text-success fw-light">${secondRemaining}s </span>                    

                    </h4>
                <div class="card-body position-relative bg-light rounded-bottom ">
                    <a href="./specificprod.html?id=${element.id}"
                    class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
                    ><span class="position-absolute top-50 start-50 translate-middle  fs-4"> BID</span>
                    </a>
                    <h3 class="card-title text-center mt-4 text-success fw-light">${
                       element.title
                    }</h3>
                    <p class="card-text text-center fs-5 text-success fw-light mt-2 m-0 ">Highest bid</p>
                    <p class="card-text text-center fs-5 text-success fw-light">${0} Credit</p>
                </div>
            </div>
        </div>`;
         } else {
            const lastbid = element.bids[element.bids.length - 1];
            const lastBidAmount = lastbid.amount;

            return ` <div class="col-12 col-md-6 col-lg-4 mb-4 rounded-bottom">
                           <div class="card position-relative shadow h-100 bg-ligth border-0 rounded-bottom bg-light">
                              <a href="./specificprod.html?id=${element.id}">
                                 <img class="card-img-top card__size--img"
                                 src="${element.media[0]}"
                                 onerror="this.src ='./image/errorimg.jpg';"
                                 alt="image of the product"/>
                                 </a>
                                 <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light rounded-1"> 
                                 <span class="me-1 text-success fw-light">${daysRemaining}d </span>                    
                                 <span class="me-1 text-success fw-light">${hoursRemaining}h </span>                    
                                 <span class="me-1 text-success fw-light">${minuteRemaining}m </span>                    
                                 <span class="text-success fw-light">${secondRemaining}s </span>                    

                                 </h4>
                              <div class="card-body position-relative bg-light rounded-bottom ">
                                 <a href="./specificprod.html?id=${element.id}"
                                 class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
                                 ><span class="position-absolute top-50 start-50 translate-middle  fs-4"> BID</span>
                                 </a>
                                 <h3 class="card-title text-center mt-4 text-success fw-light">${element.title}</h3>
                                 <p class="card-text text-center fs-5 text-success fw-light mt-2 m-0 ">Highest bid</p>
                                 <p class="card-text text-center fs-5 text-success fw-light">${lastBidAmount} Credit</p>
                              </div>
                           </div>
                     </div>`;
         }
      })
      .join("");

   containerSearch.innerHTML = createHtml;
}

{
   /* <div class="col-12 col-md-6 col-lg-4 mb-5">
                     <div class="card position-relative shadow h-100 bg-light">
                     <a href="/specificprod.html?id=${element.id}">
                        <img class="card-img-top card__size--img"
                        src="${element.media[0]}"
                        onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                        alt="image of the product"/>
                     </a>
                     <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light">                     
                     <span class="me-1">${daysRemaining}d </span>                    
                     <span class="me-1">${hoursRemaining}h </span>                    
                     <span class="me-1">${minuteRemaining}m </span>                    
                     <span>${secondRemaining}s </span>
                     </h4>
                     <div class="card-body position-relative">
                     <a href="#"
                     class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
                     ><span class="position-absolute top-50 start-50 translate-middle fw-bold fs-4"> BID</span>
                     </a>
                     <h3 class="card-title text-center mt-4">${element.title}</h3>
                     <p class="card-text text-center">0</p>
                     </div>
                     </div>
                     </div>  */
}
