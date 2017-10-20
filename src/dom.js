class DOMOperations {
  constructor() {

  }

  getFormData(inputId) {
    return document.getElementById(inputId).value;
  }

  /**
   * TODO: docs
   * @param inputIndex
   */
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

  /**
   * TODO: docs
   * @param milestonesArray
   */
  displayMilestones(milestonesArray) {
    if (!milestonesArray) {
      console.warn('No milestones found.');
      return;
    }

    const pseudoSelectElement = document.querySelector('#milestone-selector');
    const pseudoSelectElementUl = pseudoSelectElement.querySelector('ul');
    const pseudoSelectElementInput = pseudoSelectElement.querySelector('input');

    // Clear the suggestion list
    while (pseudoSelectElementUl.firstChild) {
      pseudoSelectElementUl.removeChild(pseudoSelectElementUl.firstChild);
    }

    for (let i = 0; i < milestonesArray.length; i++) {
      let li = document.createElement('LI');
      li.innerText = milestonesArray[i].title;
      li.setAttribute('data-val', milestonesArray[i].number);
      li.className = 'mdl-menu__item';

      pseudoSelectElementUl.appendChild(li);
    }

 // <input class="mdl-textfield__input" id="milestone" name="milestone" value="..." type="text" readonly tabIndex="-1" data-val="Placeholder"/>
 //    pseudoSelectElement.removeChild(pseudoSelectElementInput);
 //    let newInput = document.createElement('INPUT');
 //    newInput.className = 'mdl-textfield__input';
 //    newInput.setAttribute('type', 'text');
 //    newInput.setAttribute('readonly', 'true');
 //    newInput.setAttribute('tabIndex', '-1');
 //    newInput.setAttribute('data-val', encodeURI(milestonesArray[0].title));
 //    newInput.id = 'milestone';
 //    newInput.value = milestonesArray[0].title;
 //
 //    pseudoSelectElement.insertBefore(newInput, pseudoSelectElement.firstChild);

    if (getmdlSelect) {
      getmdlSelect.init('#milestone-selector');
    }
  }

  /**
   * TODO: docs
   * @param issuesArray
   */
  displayIssues(issuesArray) {
    const table = document.querySelector('#issue-table');

    /*
    <tr><td class="mdl-data-table__cell--non-numeric">Select a milestone above.</td></tr>
     */

    // Clear the table
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    for (let i = 0; i < issuesArray.length; i++) {
      let TR = document.createElement('TR');
      let TD = document.createElement('TD');
      TD.className = 'mdl-data-table__cell--non-numeric';
      TD.innerText = issuesArray[i].title;
      TR.appendChild(TD);
      table.appendChild(TR);
    }
  }
}

export default DOMOperations;