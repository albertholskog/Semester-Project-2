import { registerUrl } from "../url.mjs";
import { apiCall } from "./apiCall.mjs";
import { emailVali } from "./formvalidation.mjs";
import { displayErrorMessage } from "../innerhtml/displayError.mjs";

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
      console.log(errorContainerRegister);
      const passwordErr = document.querySelector("#passwordErrReg");
      const formData = new FormData(registerForm);
      const formDataSeri = Object.fromEntries(formData);

      if (formDataSeri.name.length > 7) {
         nameErr.innerHTML = "";
         registerInputName.classList.add("border-green");
      } else {
         nameErr.innerHTML = "navn må ha minst 8";
         registerInputName.classList.remove("border-green");
         registerInputName.classList.add("border-err");
      }
      if (emailVali(formDataSeri.email)) {
         emailErr.innerHTML = "";
         registerInputEmail.classList.add("border-green");
      } else {
         emailErr.innerHTML = " Email need to have @stud.noroff.no";
         registerInputEmail.classList.remove("border-green");
         registerInputEmail.classList.add("border-err");
      }
      if (formDataSeri.password.length > 7) {
         passwordErr.innerHTML = "";
         registerInputPassword.classList.add("border-green");
      } else {
         passwordErr.innerHTML = " Password must be at least 8 characters";
         registerInputPassword.classList.remove("border-green");
         registerInputPassword.classList.add("border-err");
      }

      try {
         const jsonData = await apiCall(registerUrl, "POST", "", formDataSeri);

         if (jsonData.ok) {
            console.log("okie");
         } else {
            console.log("heh");
            errorContainerRegister.innerHTML = displayErrorMessage(
               "Email or password or name is incorrect "
            );

            registerInputName.classList.remove("border-green");
            registerInputName.classList.add("border-err");
         }
         console.log(jsonData);
      } catch (error) {
         errorContainerRegister.innerHTML = displayErrorMessage();
      }
   });
}
