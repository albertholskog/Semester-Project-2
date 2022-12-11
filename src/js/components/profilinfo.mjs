import { profilUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";
import { apiCall } from "./apiCall.mjs";
import { displayErrorMessage } from "../innerhtml/displayError.mjs";

export async function profilApiCall() {
   const errorContainer = document.querySelector(".container__error--display");
   const containerAvatar = document.querySelector(".container__avatar");
   const containerProfilInfo = document.querySelector(
      ".container__profil--info"
   );
   const spinner = document.querySelector(".spinner-container");
   try {
      const element = await apiCall(profilUrl, "GET", token);

      containerAvatar.innerHTML = ` <img
                                       class="rounded-circle avatar__img shadow"
                                       src="${element.avatar}"
                                       onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                       alt=""
                                    />`;
      containerProfilInfo.innerHTML += `<h4 class="mt-3 text-center text-success">${element.name}</h4>
                                       <h4 class="mt-4 text-center text-success">Credit:</h4>
                                       <h5 class="mt-2 text-center text-success">${element.credits}</h5>`;

      spinner.innerHTML = "";
   } catch (error) {
      console.log(error);
      errorContainer.innerHTML = displayErrorMessage(
         "Can't access the api call to retrieve profile information "
      );
   }
}
