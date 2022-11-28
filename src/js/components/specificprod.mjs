import { listingsEntryUrl } from "../url.mjs";

const carouselItem = document.querySelector(".carousel-inner");
const containerBidCurrent = document.querySelector(".container__bid--current");
const containerBidInfo = document.querySelector(".container__bid--info");
const containerBidHistory = document.querySelector(".container__bid--history");
console.log(containerBidHistory);

export async function listingsEntryApiCall() {
   const data = await fetch(listingsEntryUrl);
   const element = await data.json();
   const bidName = element.bids;

   console.log(element.media);
   for (let i = 0; i < element.media.length; i++) {
      const prodImage = element.media[i];

      carouselItem.innerHTML += `   <div class="carousel-item active h-100">
                                       <img
                                          src="${prodImage}"
                                          onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                          class="d-block w-100 h-100"
                                          alt="product image for ${element.title}"
                                       />
                                    </div>`;
   }

   if (element.bids.length >= -1) {
      const lastBid = element.bids[element.bids.length - 1].amount;

      containerBidCurrent.innerHTML += `<h3 class="fs-4 fw-normal text-dark">
                                             Current Bid: <span>${lastBid}</span>
                                         </h3>
                                         <h3 class="fs-4 fw-normal text-dark">
                                          Time remaining: <span>${element.endsAt}</span>
                                         </h3>`;

      containerBidInfo.innerHTML += `<p>
                                          ${element.title}<br />
                                          ${element.description}
                                     </p>`;

      for (let i = 0; i < bidName.length; i++) {
         const bidUser = bidName[i];

         containerBidHistory.innerHTML += ` <p>${bidUser.bidderName}<span class="ms-5">${bidUser.amount}</span></p>`;
      }
   } else {
      containerBidCurrent.innerHTML += `<h3 class="fs-4 fw-normal text-dark">
                                                Current Bid: <span>0</span>
                                          </h3>
                                          <h3 class="fs-4 fw-normal text-dark">
                                             Time remaining: <span>${element.endsAt}</span>
                                          </h3>`;

      containerBidInfo.innerHTML += `<p>
                                       ${element.title}<br />
                                       ${element.description}
                                     </p>`;

      containerBidHistory.innerHTML = ` <p>
                                         No bidding history
                                       </p>`;
   }
}
