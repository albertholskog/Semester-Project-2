export function emailVali(email) {
   const regEx = /^([a-zA-Z0-9-_.]+)@(stud.noroff.no)$/;
   const emailMatch = regEx.test(email);
   return emailMatch;
}
