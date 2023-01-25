const ratingContainer = document.querySelector(".rating");
const thankyouContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-button");
const rates = document.querySelectorAll(".btn");
const score = document.getElementById("score");

submitButton.addEventListener("click", () => {
  ratingContainer.style.display = "none";
  thankyouContainer.classList.remove("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    score.innerHTML = rate.innerHTML;
  });
});
