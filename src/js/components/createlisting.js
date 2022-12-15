import { apiCall } from "./apiCall.js";
import { createListingUrl } from "../url.js";
import { token } from "./localstorage.js";

export async function createListingApiCall() {
   const formCreateListing = document.querySelector(".form__create--listing");
   // const titleInput = document.querySelector("#titleInput");
   // const dateInput = document.querySelector("#dataInput");
   formCreateListing.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(formCreateListing);
      const title = formData.get("title");
      const description = formData.get("description");
      const media = formData.getAll("media");
      const endsAt = formData.get("endsAt");
      const timeString = new Date(endsAt).toISOString();
      console.log(timeString);
      console.log(title);
      console.log(description);
      console.log(media);
      console.log(endsAt);

      const filterMedia = media.filter(function (nomedia) {
         return nomedia;
      });
      console.log(filterMedia);

      const listingObj = {
         title: title,
         description: description,
         media: filterMedia,
         endsAt: timeString,
      };
      console.log(listingObj);

      try {
         await apiCall(createListingUrl, "POST", token, listingObj);
         setTimeout(() => {
            window.location.reload();
         }, "200");

         // return jsonData;
      } catch (error) {
         console.log(error);
      }
   });
}
