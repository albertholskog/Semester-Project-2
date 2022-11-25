import { registerUrl } from "../url.mjs";

const registerForm = document.querySelector(".register__form");

export async function registerUser() {
   registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(registerForm);
      const formDataSeri = Object.fromEntries(formData);
      console.log(formDataSeri);
      try {
         const data = await fetch(registerUrl, {
            method: "POST",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify(formDataSeri),
         });
         const jsonData = await data.json();

         return jsonData;
      } catch (error) {
         console.log(error);
      }
   });
}
