import DOMOperations from './dom';

class EventManager {
  constructor(rnom) {
    /**
     * ReleaseNotesOMatic instance.
     * @type {Object}
     */
    this.rnom = rnom;

    this.dom = new DOMOperations();
  }

  registerEvents() {
    document.addEventListener('DOMContentLoaded', (event) => {

      this.addEvent('click', 'set-main-repo', () => {
        this.rnom.setMainRepo(this.dom.getFormData('main-repo-name'));
        this.dom.flipConfigInputs(0);
      });

      this.addEvent('click', 'set-complementary-repo', () => {
        this.rnom.setComplementaryRepo(this.dom.getFormData('complementary-repo-name'));
        this.dom.flipConfigInputs(1);
      });

      this.addEvent('click', 'set-github-auth', () => {
        this.rnom.setGhToken(this.dom.getFormData('auth-token'));
        this.dom.flipConfigInputs(2);
      });

      this.addEvent('click', 'edit-main-repo', () => {
        this.rnom.setMainRepo('');
        this.dom.flipConfigInputs(0);
      });

      this.addEvent('click', 'edit-complementary-repo', () => {
        this.rnom.setComplementaryRepo('');
        this.dom.flipConfigInputs(1);
      });

      this.addEvent('click', 'edit-auth-token', () => {
        this.rnom.setGhToken('');
        this.dom.flipConfigInputs(2);
      });

      this.dom.flipConfigInputs();
    });
  }

  addEvent(action, elementId, callback) {
    document.getElementById(elementId).addEventListener(action, callback);
  }
}

export default EventManager;