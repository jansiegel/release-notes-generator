class RepoDataCache {
  constructor(rnom) {
    this.issues = {};
    this.rnom = rnom;
  }

  cacheIssues(issuesArray, extend = true) {
    for (let i = 0; i < issuesArray.length; i++) {
      let issue = issuesArray[i];

      if (extend) {
        this.extendIssue(issue, 'merged-label');
      }

      this.issues[issue.number] = issue;

      if (issue._rnom.merged) {
        this.rnom.changesCache.changes[issue.number] = issue.title;
      }
    }
  }

  /**
   * @private
   */
  extendIssue(issue, action) {
    if (!issue._rnom) {
      issue._rnom = {};
    }

    switch (action) {
      case 'merged-label': {

        for (let i = 0; i < issue.labels.length; i++) {
          if (issue.labels[i].name.includes('Merged')) {
            issue._rnom.merged = true;

          } else if (issue.labels[i].name.includes('Breaking')) {
            issue._rnom.breaking = true;

          } else if (issue.pull_request) {
            issue._rnom.pr = true;

           this.rnom.ghController.repo.getPullRequest(issue.number, function(sth, obj) {
             if (obj.merged) {
               issue._rnom.merged = true;
             }
           });
          }
        }

        break;
      }
      default: {
      }
    }
  }

  getIssueCache(issueNumber) {
    return this.issues[issueNumber];
  }
}

export default RepoDataCache;