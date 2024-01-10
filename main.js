document.addEventListener("DOMContentLoaded", function () {
  // select form, input and error message elements
  const form = document.querySelector(".form");
  const input = document.querySelector('input[name="email-input"]');
  const errorMessage = document.querySelector(".error-message");
  const button = document.querySelector("button");

  form.addEventListener("submit", function (event) {
    // prevent the normal form submission
    event.preventDefault();

    //define email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // test input against regex
    if (!emailRegex.test(input.value)) {
      errorMessage.style.display = "block";
      input.style.border = "1px solid #FF5466";
    } else {
      errorMessage.style.display = "";
      input.style.border = "";
      button.style.marginTop = "";
    }
  });
});
