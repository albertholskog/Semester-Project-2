import { registerUrl } from "../url.mjs";
console.log(registerUrl);
const registerInputEmail = document.querySelector("#registerInputEmail");
const emailErr = document.querySelector("#emailErrReg");

const registerInputName = document.querySelector("#registerInputName");
const nameErr = document.querySelector("#nameErrReg");

const registerInputPassword = document.querySelector("#registerInputPassword");
const passwordErr = document.querySelector("#passwordErrReg");

const registerForm = document.querySelector(".register__form");

export async function registerUser() {
   registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(registerForm);
      const formDataSeri = Object.fromEntries(formData);
      console.log(formDataSeri);

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

export function emailVali(email) {
   const regEx = /^([a-zA-Z0-9-_.]+)@(stud.noroff.no)$/;
   const emailMatch = regEx.test(email);
   return emailMatch;
}
