const array = document.querySelectorAll(".click");
const number = document.getElementById("num");
const btn = document.getElementsByTagName("button");

const gradients = [
  "bg-primary bg-gradient",
  "bg-secondary bg-gradient",
  "bg-success bg-gradient",
  "bg-danger bg-gradient",
  "bg-warning bg-gradient",
  "bg-info bg-gradient",
];

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", (e) => {
    e.preventDefault();

    if (!array[i].classList.contains("click")) return;

    array[i].classList.add(
      ...gradients[Math.floor(Math.random() * gradients.length)].split(" ")
    );

    number.textContent = Number(number.textContent) + 1;
    array[i].classList.remove("click");
  });
}

btn[0].addEventListener("click", (e) => {
  e.preventDefault();
  number.textContent = "0";

  for (let i = 0; i < array.length; i++) {
    array[i].className = "click t border border-primary shadow-lg";
    array[i].style.backgroundColor = "#ffffff";
  }
});
