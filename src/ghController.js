class GithubController {
  constructor(rnom) {
    this.rnom = rnom;
    this.gh = this.rnom.gh;
    this.dom = this.rnom.dom;
    this.issues = null;
    this.repo = null;
    this.repoCache = this.rnom.repoCache;
  }

  getIssuesController(user, repo, force) {
    if (!this.issues || force) {
      this.issues = this.gh.getIssues(user, repo);
    }

    return this.issues;
  }

  getRepoController(user, repo, force) {
    if (!this.repo || force) {
      this.repo = this.gh.getRepo(user, repo);
    }

    return this.repo;
  }

  getMilestones() {
    const [user, repo] = this.rnom.mainRepo.split('/');
    const issuesController = this.getIssuesController(user, repo);
    const repoController = this.getRepoController(user, repo);
    const _this = this;

    if (issuesController) {
      issuesController.listMilestones({}, (sth, milestonesArray) => {
        _this.dom.displayMilestones(milestonesArray);
      });
    }
  }

  getIssuesForMilestone(milestone) {
    const [user, repo] = this.rnom.mainRepo.split('/');
    const issuesController = this.getIssuesController(user, repo);
    const _this = this;

    if (issuesController) {
      issuesController.listIssues({
        milestone: milestone
      }, (sth, issuesArray) => {
        _this.repoCache.cacheIssues(issuesArray);
        _this.dom.displayIssues(issuesArray);
        _this.dom.updateMarkdown();
        _this.dom.updateHTMLResult();
      });
    }
  }
}

export default GithubController;