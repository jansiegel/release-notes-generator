import GithubController from './ghController';
import EventManager from './eventManager';
import DOMOperations from './dom';
import GitHub from 'github-api';
import 'material-design-lite';
import RepoDataCache from "./repoDataCache";
import MarkdownGenerator from "./markdownGenerator";
import ChangesCache from "./changesCache";
import HTMLGenerator from "./htmlGenerator";

class ReleaseNotesOMatic {

  constructor() {
    /**
     * Main repo name.
     * @type {String}
     */
    this.mainRepo = localStorage.rnom_mainRepoName || null;

    /**
     * Github token provided from the UI.
     * @type {String}
     */
    this.ghToken = localStorage.rnom_ghToken || null;

    /**
     * Github connector object.
     * @type {Object}
     */
    this.gh = null;

    /**
     * TODO: docs
     * @type {RepoDataCache}
     */
    this.repoCache = new RepoDataCache(this);

    /**
     * TODO: docs
     * @type {ChangesCache}
     */
    this.changesCache = new ChangesCache(this);

    /**
     * TODO: docs
     * @type {DOMOperations}
     */
    this.dom = new DOMOperations(this);

    /**
     * The EventManager instance.
     * @type {Object}
     */
    this.eventManager = new EventManager(this);

    /**
     * TODO: docs
     * @type {MarkdownGenerator}
     */
    this.markdownGenerator = new MarkdownGenerator(this);

    /**
     * TODO: docs
     * @type {HTMLGenerator}
     */
    this.htmlGenerator = new HTMLGenerator(this);

    // config
    this.eventManager.registerEvents();
    this.authGithub();

    /**
     * TODO: docs
     * @type {GithubController}
     */
    this.ghController = new GithubController(this);
  }

  /**
   * Set the Github token.
   * @param {String} token
   */
  setGhToken(token) {
    localStorage.setItem('rnom_ghToken', token);
    this.ghToken = token;
  }

  /**
   * Set the main repo name.
   * @param {String} name
   */
  setMainRepo(name) {
    localStorage.setItem('rnom_mainRepoName', name);
    this.mainRepo = name;
  }

  /**
   * Authenticate with Github.
   */
  authGithub() {
    if (!this.ghToken) {
      console.warn('No auth token in local storage.');
    }

    this.gh = new GitHub({
      token: this.ghToken
    });
  }

}

export default ReleaseNotesOMatic;
window.rnom = new ReleaseNotesOMatic();