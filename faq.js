const allQuestions = document.querySelectorAll(".question");

allQuestions.forEach(function (question) {
  const btn = question.querySelector(".btns");

  btn.addEventListener("click", function () {

    allQuestions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-content");
      }
    });

    question.classList.toggle("show-content");
  });
});