import { apiCall } from "../components/apiCall";

test("apiCall makes an HTTP request to the specified URL and returns the response as a JSON object", async () => {
   const url = "https://api.noroff.dev/api/v1/auction/auth/login";
   const method = "POST";
   const token = "";
   const form = {
      email: "first.last@stud.noroff.no",
      password: "UzI1NiIsInR5cCI",
   };

   const result = await apiCall(url, method, token, form);
   const accessToken = result.accessToken;
   const expectRespons = {
      accessToken: accessToken,
      avatar: null,
      credits: 1000,
      email: "first.last@stud.noroff.no",
      name: "my_username",
      ok: true,
   };
   expect(result).toEqual(expectRespons);
});
