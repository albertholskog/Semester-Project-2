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
         return jsonData;
      } else {
         return data;
      }
   } catch (error) {
      console.log(error);
   }
}
