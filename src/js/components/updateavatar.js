import { updateAvatarUrl } from "../url.js";
import { token } from "./localstorage.js";
import { apiCall } from "./apiCall.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";

const formUpdateAvatar = document.querySelector(".form__update--avatar");
const errorAvatar = document.querySelector(".error__avatar");

export async function updateavatar() {
   formUpdateAvatar.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formUpdateAvatar);
      const formDataSeri = Object.fromEntries(formData);
      try {
         if (formDataSeri.avatar !== "") {
            const jsonData = await apiCall(
               updateAvatarUrl,
               "PUT",
               token,
               formDataSeri
            );
            if (jsonData.ok) {
               setTimeout(() => {
                  window.location.reload();
               }, 200);
            } else {
               errorAvatar.innerHTML = displayErrorMessage(
                  "Need to have valid url link"
               );
            }
         } else {
            errorAvatar.innerHTML = displayErrorMessage(
               "Need to have valid url link"
            );
         }
      } catch (error) {
         errorAvatar.innerHTML = displayErrorMessage();
      }
   });
}
