import { loginUrl } from "../url.mjs";
import { emailVali } from "./register.mjs";
import { apiCallPostNoToken } from "./apiCall.mjs";

const loginInputEmail = document.querySelector("#loginInputEmail");
const emailErrLog = document.querySelector("#emailErrLog");

const loginInputPassword = document.querySelector("#loginInputPassword");
const passwordErrLog = document.querySelector("#passwordErrLog");

const loginForm = document.querySelector(".login__form");

export async function loginApiCall() {
   loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const formDataSeri = Object.fromEntries(formData);

      if (emailVali(formDataSeri.email)) {
         emailErrLog.innerHTML = "";
         loginInputEmail.classList.add("border-green");
      } else {
         emailErrLog.innerHTML = " Email need to have @stud.noroff.no";
         loginInputEmail.classList.remove("border-green");
         loginInputEmail.classList.add("border-err");
      }
      if (formDataSeri.password.length > 7) {
         passwordErrLog.innerHTML = "";
         loginInputPassword.classList.add("border-green");
      } else {
         passwordErrLog.innerHTML = " Password must be at least 8 characters";
         loginInputPassword.classList.remove("border-green");
         loginInputPassword.classList.add("border-err");
      }

      try {
         const jsonData = await apiCallPostNoToken(loginUrl, formDataSeri);

         const accessToken = jsonData.accessToken;
         const userName = jsonData.name;
         const credit = jsonData.credits;

         localStorage.setItem("credit", credit);
         localStorage.setItem("userName", userName);
         localStorage.setItem("accessToken", accessToken);

         console.log(jsonData);
      } catch (error) {
         console.log(error);
      } finally {
         setTimeout(() => {
            window.location.reload();
         }, "200");
      }
   });
}
