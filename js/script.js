var questions = document.querySelectorAll(".question");
var formulaire = document.getElementById("qrform");

function creatNewQR() {
  let newQuestion = new Questionnaire(
    formulaire.elements["question"].value,
    formulaire.elements["reponse"].value
  );
  newQuestion.creatQuestionnaireElement();

  Questionnaire.storeInLocalstorage(newQuestion);
}
/**
 * get elements from local storage ans create new element in the container
 */
function loadElements() {
  Questionnaire.getQuestionnaireDuStorage().forEach((qr) => {
    new Questionnaire(qr.question, qr.reponse).creatQuestionnaireElement();
    // qr.creatQuestionnaireElement();
  });
}

loadElements();

formulaire.addEventListener("submit", (event) => {
  // stop form submission
  event.preventDefault();
  creatNewQR();
});
