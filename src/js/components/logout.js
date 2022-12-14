export function logout() {
   const logoutBtn = document.querySelector(".logout__btn");
   if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
         localStorage.clear();
         setTimeout(() => {
            window.location.reload();
         }, "200");
      });
   }
}
