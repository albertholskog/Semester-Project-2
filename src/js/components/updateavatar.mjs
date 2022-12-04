import { updateAvatarUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";
import { apiCallWithForm } from "./apiCall.mjs";

const formUpdateAvatar = document.querySelector(".form__update--avatar");
console.log(formUpdateAvatar);

export async function updateavatar() {
   formUpdateAvatar.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formUpdateAvatar);
      const formDataSeri = Object.fromEntries(formData);
      console.log(formDataSeri);

      try {
         const jsonData = apiCallWithForm(updateAvatarUrl, token, formDataSeri);
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
