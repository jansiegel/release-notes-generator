class GithubController {
  constructor(rnom) {
    this.rnom = rnom;
    this.gh = this.rnom.gh;
    this.dom = this.rnom.dom;
    this.issues = null;
  }

  getIssuesController(user, repo, force) {
    if (!this.issues || force) {
      this.issues = this.gh.getIssues(user, repo);
    }

    return this.issues;
  }

  getMilestones() {
    // [user, repo] = this.rnom.mainRepo.split('/');
    let user = this.rnom.mainRepo.split('/')[0];
    let repo = this.rnom.mainRepo.split('/')[1];
    const issuesController = this.getIssuesController(user, repo);
    const _this = this;

    if (issuesController) {
      issuesController.listMilestones({}, (sth, milestonesArray) => {
        _this.dom.displayMilestones(milestonesArray);
      });
    }
  }

  getIssuesForMilestone(milestone) {
    let user = this.rnom.mainRepo.split('/')[0];
    let repo = this.rnom.mainRepo.split('/')[1];
    const issuesController = this.getIssuesController(user, repo);
    const _this = this;

    if (issuesController) {
      issuesController.listIssues({
        milestone: milestone
      }, (sth, issuesArray) => {
        _this.dom.displayIssues(issuesArray);
      });
    }
  }
}

export default GithubController;