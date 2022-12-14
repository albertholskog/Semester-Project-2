const qs = document.location.search;
const params = new URLSearchParams(qs);
export const id = params.get("id");
