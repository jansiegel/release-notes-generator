class MarkdownGenerator {
  constructor(rnom) {
    this.rnom = rnom;
  }

  makeIssueEntry(title, number) {
    return `- ${title} (#${number})\n`;
  }

  generate() {
    const titles = this.rnom.changesCache.changes;
    const breakingChanges = {};
    const changes = {};

    for (let issueNumber in titles) {
      if (titles.hasOwnProperty(issueNumber)) {
        const breakingChange = this.rnom.repoCache.getIssueCache(issueNumber)._rnom.breaking;

        if (breakingChange) {
          breakingChanges[issueNumber] = titles[issueNumber];
        } else {
          changes[issueNumber] = titles[issueNumber];
        }
      }
    }

    let breakingChangesString = '';
    // TODO: update this later
    // let complementaryRepoInfoString = 'The corresponding Handsontable Pro version is';

    if (Object.keys(breakingChanges).length) {
      breakingChangesString = '### Breaking changes\n';

      for (let issueNumber in breakingChanges) {
        breakingChangesString += this.makeIssueEntry(breakingChanges[issueNumber], issueNumber);
      }

      breakingChangesString += '\n\n';
    }

    let changesString = '### Changes\n';
    for (let issueNumber in changes) {
      changesString += this.makeIssueEntry(changes[issueNumber], issueNumber);
    }

    // complementaryRepoInfoString = `The corresponding [COMPLEMENTARY_REPO_NAME] version is [COMPLEMENTARY_VERSION]`;
    //
    return `
    ${breakingChangesString}${changesString}
    `;
  }
}

export default MarkdownGenerator;