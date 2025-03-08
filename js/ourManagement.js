document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleBtn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
      const hiddenText = this.nextElementSibling;

      if (hiddenText.classList.contains("show")) {
        hiddenText.classList.remove("show");
        this.textContent = "READ MORE";
      } else {
        hiddenText.classList.add("show");
        this.textContent = "READ LESS";
      }
    });
  });
});
