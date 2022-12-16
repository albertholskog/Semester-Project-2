export function emailVali(email) {
   const regEx = /^([a-zA-Z0-9-_.]+)@(stud.noroff.no)$/;
   const emailMatch = regEx.test(email);
   return emailMatch;
}
export function nameVali(e) {
   const regEx = /^[A-Za-z0-9_]*$/;

   const nameMatch = regEx.test(e);
   return nameMatch;
}
