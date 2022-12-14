/**
 * Api Call function that takes 4 argument to have a reusable api fucnticon
 * @param {string} url url is stored in url.mjs and you can find with url you need from the api doc
 * @param {string} method http methet you need to use
 * @param {string} verification accestoken that is stored in local storage
 * @param {object} form form is from input that the user is typing inn from the input fild
 * @returns
 */

export async function apiCall(url, method, verification, form) {
   try {
      const data = await fetch(url, {
         method: method,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${verification}`,
         },
         body: JSON.stringify(form),
      });

      const jsonData = await data.json();

      if (data.ok) {
         jsonData["ok"] = true;
         return jsonData;
      } else {
         return data;
      }
   } catch (error) {
      console.log(error);
   }
}
