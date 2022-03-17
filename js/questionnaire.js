class Questionnaire {
  constructor(question, reponse) {
    this.question = question;
    this.reponse = reponse;
  }

  creatQuestionnaireElement() {
    let container = document.querySelector(".container");
    let divQ = document.createElement("div");
    let divQR = document.createElement("div");
    let divR = document.createElement("div");

    divQ.setAttribute("class", "question");
    divQ.textContent = this.question;

    divR.setAttribute("class", "reponse");
    divR.textContent = this.reponse;

    divQR.setAttribute("class", "qr");

    divQR.appendChild(divQ);

    divQR.appendChild(divR);

    container.appendChild(divQR);

    divQ.addEventListener("click", function () {
      divR.classList.toggle("show");
      divR.animate([{ opacity: 0 }, { opacity: 1 }], {
        // timing options
        duration: 2000,
        iterations: 1,
      });
    });
  }

  static storeInLocalstorage(newquestion) {
    let stock = this.getQuestionnaireDuStorage();
    stock.push(newquestion);
    localStorage.setItem("questionnaire", JSON.stringify(stock));
  }

  static getQuestionnaireDuStorage() {
    return localStorage.getItem("questionnaire") == null
      ? []
      : JSON.parse(localStorage.getItem("questionnaire"));
  }

  //   toggleReponse(response) {
  //     if (response.style.display == "none") {
  //       response.style.display = "block";
  //     } else {
  //       response.style.display = "none";
  //     }
  //   }
}
