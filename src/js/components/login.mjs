import { loginUrl } from "../url.mjs";

const loginForm = document.querySelector(".login__form");

export async function loginApiCall() {
   loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const formDataSeri = Object.fromEntries(formData);

      try {
         const data = await fetch(loginUrl, {
            method: "POST",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify(formDataSeri),
         });
         const jsonData = await data.json();
         const accessToken = jsonData.accessToken;
         localStorage.setItem("accessToken", accessToken);
         console.log(jsonData);
      } catch (error) {
         console.log(error);
      }
   });
}
