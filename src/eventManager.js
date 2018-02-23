import Clipboard from 'clipboard';

class EventManager {
  constructor(rnom) {
    /**
     * ReleaseNotesOMatic instance.
     * @type {Object}
     */
    this.rnom = rnom;

    this.dom = this.rnom.dom;

    // Move this somewhere else TODO
    this.helperFunctions = {
      titleChanged: (element, issueNumber) => {
        this.rnom.changesCache.updateChangeCache(issueNumber, element.innerText);
        this.dom.updateMarkdown();
        this.dom.updateHTMLResult();
      }
    }
  }

  registerEvents() {
    document.addEventListener('DOMContentLoaded', (event) => {

      this.addEvent('click', 'set-main-repo', () => {
        this.rnom.setMainRepo(this.dom.getFormData('main-repo-name'));
        this.dom.flipConfigInputs(0);
      });

      this.addEvent('click', 'set-github-auth', () => {
        this.rnom.setGhToken(this.dom.getFormData('auth-token'));
        this.dom.flipConfigInputs(1);
      });

      this.addEvent('click', 'edit-main-repo', () => {
        this.rnom.setMainRepo('');
        this.dom.flipConfigInputs(0);
      });

      this.addEvent('click', 'edit-auth-token', () => {
        this.rnom.setGhToken('');
        this.dom.flipConfigInputs(1);
      });

      this.addEvent('click', 'show-markdown', () => {
        const markdown = document.querySelector('#markdown');
        if (!markdown.showModal) {
          dialogPolyfill.registerDialog(markdown);
        }

        markdown.showModal();
      });

      this.addEvent('click', 'close-markdown', () => {
        const markdown = document.querySelector('#markdown');

        markdown.close();
      });

      this.addEvent('click', 'show-html-result', () => {
        const markdown = document.querySelector('#html-result');
        if (!markdown.showModal) {
          dialogPolyfill.registerDialog(markdown);
        }

        markdown.showModal();
      });

      this.addEvent('click', 'close-html-result', () => {
        const markdown = document.querySelector('#html-result');

        markdown.close();
      });

      this.addEvent('change', 'milestone', (e) => {
        this.rnom.ghController.getIssuesForMilestone(e.target.getAttribute('data-val'));
      });

      this.dom.flipConfigInputs();

      // get Milestones
      this.rnom.ghController.getMilestones();

      // Clipboard.js
      new Clipboard('#copy-markdown');
      new Clipboard('#copy-html-result');
    });
  }

  addEvent(action, elementId, callback) {
    document.getElementById(elementId).addEventListener(action, callback);
  }
}

export default EventManager;