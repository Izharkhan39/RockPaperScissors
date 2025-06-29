const modal = document.querySelector(".modal");
const body = document.querySelector("body");

export function showModal() {
  modal.style.display = "block";

  console.log("Modal Active");
}

// window.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });
