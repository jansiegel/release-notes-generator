class ChangesCache {
  constructor(rnom) {
    this.changes = {};
  }

  getChangeCache(issueNumber) {
    return this.changes[issueNumber];
  }

  updateChangeCache(issueNumber, value) {
    this.changes[issueNumber] = value;
  }

}

export default ChangesCache;