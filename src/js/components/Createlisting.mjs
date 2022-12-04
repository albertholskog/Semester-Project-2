import { CreateListingUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";
import { apiCallWithPost } from "./apiCall.mjs";

export async function CreateListingApiCall() {
   const formCreateListing = document.querySelector(".form__create--listing");
   formCreateListing.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formCreateListing);
      const formDataSeri = Object.fromEntries(formData);
      console.log(formDataSeri);
      try {
         const jsonData = apiCallWithPost(
            CreateListingUrl,
            token,
            formDataSeri
         );
         return jsonData;
      } catch (error) {
         console.log(error);
      } finally {
         setTimeout(() => {
            window.location.reload();
         }, "200");
      }
   });
}
