import { profilUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";
import { apiCall } from "./apiCall.mjs";

const containerAvatar = document.querySelector(".container__avatar");
const containerProfilInfo = document.querySelector(".container__profil--info");

export async function profilApiCall() {
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
   } catch (error) {
      console.log(error);
   }
}
