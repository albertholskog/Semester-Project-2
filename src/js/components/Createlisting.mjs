import { CreateListingUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";

const formCreateListing = document.querySelector(".form__create--listing");

export async function CreateListingApiCall() {
   formCreateListing.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formCreateListing);
      const formDataSeri = Object.fromEntries(formData);

      try {
         const data = await fetch(CreateListingUrl, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formDataSeri),
         });
         const jsonData = await data.json();
         console.log(jsonData);
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
