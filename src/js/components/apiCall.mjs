import { token } from "./localstorage.mjs";

export async function apiCall(url, option) {
   const data = await fetch(url, option);
   const jsonData = await data.json();
   return jsonData;
}

export const optionGet = {
   method: "GET",
   headers: {
      "Content-type": "application/json",
   },
};
export const optionGetToken = {
   method: "GET",
   headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
   },
};

export async function apiCallWithForm(url, verification, form) {
   const data = await fetch(url, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${verification}`,
      },
      body: JSON.stringify(form),
   });
   const jsonData = await data.json();
   console.log(jsonData);
   return jsonData;
}

export async function apiCallWithPost(url, verification, form) {
   const data = await fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${verification}`,
      },
      body: JSON.stringify(form),
   });
   const jsonData = await data.json();
   console.log(jsonData);
   return jsonData;
}
export async function apiCallPostNoToken(url, form) {
   const data = await fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
   });
   const jsonData = await data.json();
   console.log(jsonData);
   return jsonData;
}
