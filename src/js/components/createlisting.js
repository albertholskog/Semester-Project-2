import { apiCall } from "./apiCall.js";
import { createListingUrl } from "../url.js";
import { token } from "./localstorage.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";

export async function createListingApiCall() {
   const formCreateListing = document.querySelector(".form__create--listing");
   const errorCreatelisting = document.querySelector(".create__listing--error");

   formCreateListing.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(formCreateListing);
      const title = formData.get("title");
      const description = formData.get("description");
      const media = formData.getAll("media");
      const endsAt = formData.get("endsAt");
      const timeString = new Date(endsAt).toISOString();

      const filterMedia = media.filter(function (nomedia) {
         return nomedia;
      });
      const currentTime = new Date().toISOString();

      const listingObj = {
         title: title,
         description: description,
         media: filterMedia,
         endsAt: timeString,
      };

      try {
         if (currentTime < timeString) {
            await apiCall(createListingUrl, "POST", token, listingObj);
            setTimeout(() => {
               window.location.reload();
            }, 500);
         } else {
            errorCreatelisting.innerHTML = displayErrorMessage(
               "The date must be more than today's date "
            );
         }
      } catch (error) {
         errorCreatelisting.innerHTML = displayErrorMessage();
      }
   });
}
