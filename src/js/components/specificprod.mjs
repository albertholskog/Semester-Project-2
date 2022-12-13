import { listingsEntryUrl } from "../url.mjs";
import { apiCall } from "./apiCall.mjs";
import { timeformat } from "./timeformat.mjs";
import { sortArray } from "./sort.mjs";

export async function listingsEntryApiCall() {
   const carouselItem = document.querySelector(".carousel-inner");
   const containerBidCurrent = document.querySelector(
      ".container__bid--current"
   );
   const containerBidInfo = document.querySelector(".container__bid--info");
   const containerBidHistory = document.querySelector(
      ".container__bid--history"
   );
   const spinner = document.querySelector(".spinner-container");

   try {
      const element = await apiCall(listingsEntryUrl, "GET");
      console.log(element.media);
      const [daysRemaining, hoursRemaining, minuteRemaining, secondRemaining] =
         timeformat(`${element.endsAt}`);

      const bidName = element.bids;

      if (element.media.length === 0) {
         carouselItem.innerHTML += `   <div class="carousel-item active h-100">
                                          <img
                                             src="../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg"
                                             onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                             class="carousel__prod"
                                             alt="product image for ${element.title}"
                                          />
                                       </div>`;
      } else {
         for (let i = 0; i < element.media.length; i++) {
            console.log(element.media);
            carouselItem.innerHTML += `   <div class="carousel-item active h-100">
                                       <img
                                          src="${element.media[i]}"
                                          onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                          class="carousel__prod"
                                          alt="product image for ${element.title}"
                                       />
                                    </div>`;
         }
      }

      sortArray(element.bids);

      if (element.bids.length >= 1) {
         const lastBid = element.bids[element.bids.length - 1].amount;

         console.log("3");
         containerBidCurrent.innerHTML = `
                                          <h3 class="fs-4 text-success fw-light text-center">
                                                Current Bid: 
                                          </h3>
                                          <h3 class="fs-4 text-success fw-light text-center">
                                                   ${lastBid}
                                          </h3>
                                          <h3 class="fs-4 text-success fw-light text-center mt-3 ">
                                                Time remaining:
                                          </h3>
                                          <h3 class="fs-4 text-success fw-light text-center">
                                                <span class="me-1 text-success fw-light">${daysRemaining}d </span>                    
                                                <span class="me-1 text-success fw-light">${hoursRemaining}h </span>                    
                                                <span class="me-1 text-success fw-light">${minuteRemaining}m </span>                    
                                                <span class="text-success fw-light" >${secondRemaining}s </span>
                                          </h3>`;

         containerBidInfo.innerHTML = `<p class="text-success fw-light m-1">
                                          ${element.title}<br />
                                          ${element.description}
                                     </p>`;

         for (let i = 0; i < bidName.length; i++) {
            const bidUser = bidName[i];
            console.log("4");
            containerBidHistory.innerHTML += ` <p class="text-success fw-light">${bidUser.bidderName}<span class="ms-5">${bidUser.amount}</span></p>`;
         }
      } else {
         console.log("5");
         containerBidCurrent.innerHTML = `<h3 class="fs-4 text-success fw-light text-center">
                                                   Current Bid: 
                                          </h3>
                                           <h3 class="fs-4 text-success fw-light text-center">
                                                   0
                                          </h3>
                                          <h3 class="fs-4 text-success fw-light text-center mt-3 ">
                                                Time remaining:
                                          </h3>
                                          <h3 class="fs-4 text-success fw-light text-center">
                                             <span class="me-1 text-success fw-light">${daysRemaining}d </span>                    
                                             <span class="me-1 text-success fw-light">${hoursRemaining}h </span>                    
                                             <span class="me-1 text-success fw-light">${minuteRemaining}m </span>                    
                                             <span class="text-success fw-light" >${secondRemaining}s </span>
                                          </h3>`;

         containerBidInfo.innerHTML = `<p class="text-success m-1">
                                       ${element.title}<br />
                                       ${element.description}
                                     </p>`;

         containerBidHistory.innerHTML = ` <p class="text-success">
                                         No bidding history
                                       </p>`;
      }
      spinner.innerHTML = "";
      return bidName;
   } catch (error) {
      console.log(error);
   }
}
