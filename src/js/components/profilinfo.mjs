import { profilUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";

const profilContainer = document.querySelector(".container__profil");

export async function profilApiCall() {
   try {
      const data = await fetch(profilUrl, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      });
      const element = await data.json();

      profilContainer.innerHTML = `<div>
                                    <img
                                    class="mt-5 rounded-circle avatar__img"
                                    src="${element.avatar}"
                                    onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                    alt=""
                                    />
                                </div>
                                <div >
                                    <h4 class="mt-3 text-center">${element.name}</h4>
                                    <h4 class="mt-4 text-center">Credit:</h4>
                                    <h5 class="mt-2 text-center">${element.credits}</h5>
                                </div>`;
   } catch (error) {
      console.log(error);
   }
}
