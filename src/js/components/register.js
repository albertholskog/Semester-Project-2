import { registerUrl } from "../url.js";
import { apiCall } from "./apiCall.js";
import { emailVali } from "./formvalidation.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";
import { nameVali } from "./formvalidation.js";

export async function registerUser() {
   const registerForm = document.querySelector(".register__form");
   registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const registerInputEmail = document.querySelector("#registerInputEmail");
      const emailErr = document.querySelector("#emailErrReg");

      const registerInputName = document.querySelector("#registerInputName");
      const nameErr = document.querySelector("#nameErrReg");

      const registerInputPassword = document.querySelector(
         "#registerInputPassword"
      );

      const errorContainerRegister = document.querySelector(".error__register");
      const approvedContainerRegister = document.querySelector(
         ".approved__register"
      );

      const passwordErr = document.querySelector("#passwordErrReg");
      const formData = new FormData(registerForm);
      const formDataSeri = Object.fromEntries(formData);

      if (formDataSeri.name.length > 7 && nameVali(formDataSeri.name)) {
         nameErr.innerHTML = "";
         registerInputName.classList.add("border-green");
      } else {
         nameErr.innerHTML =
            "Name must be at least 8 characters and can only contain the special character _";
         registerInputName.classList.remove("border-green");
         registerInputName.classList.add("border-err");
      }
      if (emailVali(formDataSeri.email)) {
         emailErr.innerHTML = "";
         registerInputEmail.classList.add("border-green");
      } else {
         emailErr.innerHTML = "Email need to have @stud.noroff.no";
         registerInputEmail.classList.remove("border-green");
         registerInputEmail.classList.add("border-err");
      }
      if (formDataSeri.password.length > 7) {
         passwordErr.innerHTML = "";
         registerInputPassword.classList.add("border-green");
      } else {
         passwordErr.innerHTML = "Password must be at least 8 characters";
         registerInputPassword.classList.remove("border-green");
         registerInputPassword.classList.add("border-err");
      }

      try {
         if (
            formDataSeri.name.length > 7 &&
            nameVali(formDataSeri.name) &&
            emailVali(formDataSeri.email) &&
            formDataSeri.name.length > 7
         ) {
            const jsonData = await apiCall(
               registerUrl,
               "POST",
               "",
               formDataSeri
            );

            if (jsonData.ok) {
               errorContainerRegister.innerHTML = "";
               approvedContainerRegister.innerHTML =
                  "User was successfully created";
            } else {
               errorContainerRegister.innerHTML = displayErrorMessage(
                  "User may already be registered"
               );
            }
         } else {
            approvedContainerRegister.innerHTML = "";
         }
      } catch (error) {
         errorContainerRegister.innerHTML = displayErrorMessage();
      }
   });
}
