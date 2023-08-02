const form = document.querySelector("form")
const card_1 = document.querySelector(".background-white")
const card_2 = document.querySelector(".success-card")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    card_1.classList.add("hide")
    card_2.classList.remove("hide")
})
