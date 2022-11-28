import { CreateListingUrl } from "../url.mjs";
const formCreateListing = document.querySelector(".form__create--listing");
const token = localStorage.getItem("accessToken");
console.log(formCreateListing);

export async function CreateListingApiCall() {
   formCreateListing.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formCreateListing);
      const formDataSeri = Object.fromEntries(formData);

      console.log(formDataSeri);

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
