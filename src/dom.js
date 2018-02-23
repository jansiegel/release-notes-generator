import MarkdownIt from 'markdown-it';

class DOMOperations {
  constructor(rnom) {
    this.rnom = rnom;
    this.repoCache = this.rnom.repoCache;
    this.markdownIt = new MarkdownIt();
  }

  getFormData(inputId) {
    return document.getElementById(inputId).value;
  }

  /**
   * TODO: docs
   * @param inputIndex
   */
  flipConfigInputs(inputIndex) {
    const lsItems = ['rnom_mainRepoName', 'rnom_ghToken'];
    const formElementIds = ['main-repo-form', 'auth-token-form'];
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

    if (window.getmdlSelect !== void 0) {
      getmdlSelect.init('#milestone-selector');
    }
  }

  /**
   * TODO: docs
   * @param issuesArray
   */
  displayIssues(issuesArray) {
    issuesArray = issuesArray.reverse();

    const table = document.querySelector('#issue-table');

    // Clear the table
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    for (let i = 0; i < issuesArray.length; i++) {
      const TR = document.createElement('TR');
      const TD = document.createElement('TD');
      const label = document.createElement('LABEL');
      const radio = document.createElement('INPUT');
      const issue = issuesArray[i];

      label.setAttribute('for', issue.number);
      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', 'issues');
      radio.setAttribute('onclick', 'rnom.dom.updateDetailsTable(' + issue.number + ');'); // Well this is ugly.
      radio.id = issue.number;

      label.appendChild(radio);

      TD.className = 'mdl-data-table__cell--non-numeric '
        + (issue._rnom.merged ? ' merged' : '')
        + (issue._rnom.pr ? ' pr' : '')
        + (issue._rnom.breaking ? ' breaking' : '');

      const issueTitle = document.createTextNode(' ' +  issue.title);

      label.appendChild(issueTitle);
      TD.appendChild(label);
      TR.appendChild(TD);
      table.appendChild(TR);
    }
  }

  getIssueLink(issueNumber) {
    return `<a href="https://github.com/${localStorage.rnom_mainRepoName}/issues/${issueNumber}">#${issueNumber}</a> `
  };

  updateDetailsTable(issueNumber) {
    const table = document.querySelector('#details-table');
    const tbody = document.querySelector('tbody');
    const issueCache = this.repoCache.getIssueCache(issueNumber);
    const changeCache = this.rnom.changesCache.getChangeCache(issueNumber);

    if (!issueCache) {
      console.warn('This issue cache doesn\'t exist.');
      return;
    }

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    let TR = document.createElement('TR');
    TR.className = 'no-hover';
    let TD = document.createElement('TD');

    if (changeCache) {
      TD.setAttribute('contenteditable', 'true');
    }

    TD.id = 'issue-title';
    TD.className = 'mdl-data-table__cell--non-numeric';
    TD.innerText = changeCache || issueCache.title;
    TD.setAttribute('onblur', 'rnom.eventManager.helperFunctions.titleChanged(this, ' + issueNumber + ');'); // Well this is ugly.
    TR.appendChild(TD);
    tbody.appendChild(TR);

    TR = document.createElement('TR');
    TR.className = 'no-hover';
    TD = document.createElement('TD');
    TD.className = 'mdl-data-table__cell--non-numeric';
    TD.innerHTML = this.getIssueLink(issueNumber) + '<br><br>' + this.markdownIt.render(issueCache.body.replace(/(\<\!\-\-)(.*)(\-\-\>)/gi, '')); // remove comments
    TD.setAttribute('contenteditable', 'false');
    TR.appendChild(TD);
    tbody.appendChild(TR);
  }

  updateMarkdown() {
    const content = this.rnom.markdownGenerator.generate();
    const markdownDialog = document.getElementById('markdown');

    markdownDialog.querySelector('code').innerText = content;
  }

  updateHTMLResult() {
    const content = this.rnom.htmlGenerator.generate();
    const markdownDialog = document.getElementById('html-result');

    markdownDialog.querySelector('code').innerText = content;
  }
}

export default DOMOperations;