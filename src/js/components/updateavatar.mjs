import { updateAvatarUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";

const formUpdateAvatar = document.querySelector(".form__update--avatar");
console.log(formUpdateAvatar);

export async function updateavatar() {
   formUpdateAvatar.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formUpdateAvatar);
      const formDataSeri = Object.fromEntries(formData);
      console.log(formDataSeri);
      try {
         const data = await fetch(updateAvatarUrl, {
            method: "PUT",
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
