const btnSubmit = document.getElementById("submit");
const inputs = document.querySelectorAll(".input");
const notices = document.querySelectorAll(".error-message");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      inputs[i].classList.add("correct");
      inputs[i].classList.remove("incorrect");
      notices[i].classList.remove("show-error-message");
    } else {
      inputs[i].classList.remove("correct");
      inputs[i].classList.add("incorrect");
      notices[i].classList.add("show-error-message");
    }
  }
});
