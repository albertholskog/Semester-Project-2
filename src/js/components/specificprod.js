import { listingsEntryUrl } from "../url.js";
import { apiCall } from "./apiCall.js";
import { timeformat } from "./timeformat.js";
import { sortArray } from "./sort.js";
import { userName } from "./localstorage.js";
import { deleteApiCall } from "./deletelisting.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";
import { referrer } from "./deletelisting.js";
import {
   prodBidInnerHtml,
   prodInfoInnerHtml,
} from "../innerhtml/innerthmlprodinfo.js";

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
      console.log(element);
      if (element.seller.name === userName) {
         const formBid = document.querySelector(".form__bid");
         formBid.innerHTML = "";
         const containerDelete = document.querySelector(".container__delete");
         containerDelete.innerHTML = ` <button
                                          data-cy="btn-delete"
                                          type="submit"
                                          class="btn btn-secondary shadow btn__card rounded-circle mt-2 btn__delete"
                                       >
                                          Delete
                                       </button>`;
         const btnDelete = document.querySelector(".btn__delete");
         btnDelete.addEventListener("click", () => {
            deleteApiCall();
            setTimeout(() => {
               referrer();
            }, 500);
         });
      }

      const [daysRemaining, hoursRemaining, minuteRemaining, secondRemaining] =
         timeformat(`${element.endsAt}`);

      const bidName = element.bids;

      if (element.media.length === 0) {
         carouselItem.innerHTML += `   <div class="carousel-item active  ">
                                          <img
                                             src="./image/errorimg.jpg"
                                             onerror="this.src ='./image/errorimg.jpg';"
                                             class="carousel__prod "
                                             alt="product image for ${element.title}"
                                          />
                                       </div>`;
      } else {
         for (let i = 0; i < element.media.length; i++) {
            carouselItem.innerHTML += `   <div class="carousel-item active ">
                                       <img
                                          src="${element.media[i]}"
                                          onerror="this.src ='./image/errorimg.jpg';"
                                          class="carousel__prod "
                                          alt="product image for ${element.title}"
                                       />
                                    </div>`;
         }
      }

      sortArray(element.bids);

      if (element.bids.length >= 1) {
         const lastBid = element.bids[element.bids.length - 1].amount;

         prodBidInnerHtml(
            containerBidCurrent,
            lastBid,
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining
         );
         prodInfoInnerHtml(containerBidInfo, element);

         for (let i = 0; i < bidName.length; i++) {
            const bidUser = bidName[i];

            containerBidHistory.innerHTML += `<div class="d-flex justify-content-between ">
                                                <p class="text-success fw-light">
                                                ${bidUser.bidderName}
                                                </p>
                                                <p class="text-success fw-light">
                                                ${bidUser.amount}
                                                </p>
                                                </div>`;
         }
      } else {
         console.log("5");
         prodBidInnerHtml(
            containerBidCurrent,
            0,
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining
         );
         prodInfoInnerHtml(containerBidInfo, element);

         containerBidHistory.innerHTML = ` <p class="text-success">
                                         No bidding history
                                       </p>`;
      }
      spinner.innerHTML = "";
      return bidName;
   } catch (error) {
      console.log(error);
      const errorMessageContainer = document.querySelector(".error__container");

      errorMessageContainer.innerHTML = displayErrorMessage();
   }
}
