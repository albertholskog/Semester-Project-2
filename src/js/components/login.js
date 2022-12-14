import { loginUrl } from "../url.js";
import { emailVali } from "./formvalidation.js";
import { apiCall } from "./apiCall.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";

const loginInputEmail = document.querySelector("#loginInputEmail");
const emailErrLog = document.querySelector("#emailErrLog");
const errorResponsContainer = document.querySelector(".error__login");
const loginInputPassword = document.querySelector("#loginInputPassword");
const passwordErrLog = document.querySelector("#passwordErrLog");

/**
 * loginApiCall function
 * check if the user is input is correct,
 * email need to have @stud.noroff.no
 * password need to be more than 7
 * if it pass then you will use apicall.
 * the api call will save token, username and credit to local storage
 * if you get somting wrong the user will get a red border on the input area and a text that say what happened.
 */

export async function loginApiCall() {
   const loginForm = document.querySelector(".login__form");
   loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const formDataSeri = Object.fromEntries(formData);

      if (emailVali(formDataSeri.email)) {
         emailErrLog.innerHTML = "";
         loginInputEmail.classList.add("border-green");
      } else {
         emailErrLog.innerHTML = "Email need to have @stud.noroff.no";
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
         const jsonData = await apiCall(loginUrl, "POST", "", formDataSeri);
         console.log(jsonData);
         if (jsonData.ok) {
            console.log("respons ok");
            const accessToken = jsonData.accessToken;
            const userName = jsonData.name;
            const credit = jsonData.credits;

            localStorage.setItem("credit", credit);
            localStorage.setItem("userName", userName);
            localStorage.setItem("accessToken", accessToken);
            setTimeout(() => {
               window.location.reload();
            }, 200);
         } else {
            // const errormessage = jsonData.errors.message;
            // console.log(errormessage);
            errorResponsContainer.innerHTML = displayErrorMessage(
               "Email or password is incorrect"
            );
            loginInputPassword.classList.remove("border-green");
            loginInputPassword.classList.add("border-err");
         }

         console.log(jsonData);
      } catch (error) {
         errorResponsContainer.innerHTML = displayErrorMessage();
      }
   });
}
