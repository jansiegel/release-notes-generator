class DOMOperations {
  constructor() {

  }

  getFormData(inputId) {
    return document.getElementById(inputId).value;
  }

  flipConfigInputs(inputIndex) {
    const lsItems = ['rnom_mainRepoName', 'rnom_complementaryRepoName', 'rnom_ghToken'];
    const formElementIds = ['main-repo-form', 'complementary-repo-form', 'auth-token-form'];
    let formElem = null;
    let startIndex = 0;
    let endIndex = lsItems.length;

    if (inputIndex !== void 0) {
      startIndex = inputIndex;
      endIndex = inputIndex + 1;
    }

    for (let i = startIndex; i < endIndex; i++) {
      formElem = document.getElementById(formElementIds[i]);
      if (localStorage[lsItems[i]]) {
        formElem.querySelector('.config-enabled').style.display = 'none';
        formElem.querySelector('.config-disabled').style.display = 'block';
        formElem.querySelector('.config-disabled .mdl-chip__text').innerText = localStorage[lsItems[i]];
      } else {
        formElem.querySelector('.config-enabled').style.display = 'block';
        formElem.querySelector('.config-disabled').style.display = 'none';
      }
    }
  }
}

export default DOMOperations;