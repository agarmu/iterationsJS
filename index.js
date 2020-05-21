class Transforms {
  constructor(init) {
    this.records = [{
      iter: 0,
      from: NaN,
      to: init,
    }, ];
    this.getNext = () => {
      return NaN
    }
  }
  addIterator(iterator) {
    this.iterator = iterator
  }
  addRecord(to) {
    const itr = this.records.length;
    const newRecord = {
      iter: itr,
      from: this.records[itr - 1].to,
      to: to,
    };
    this.records.push(newRecord);
    return newRecord;
  }

  addRecords(...to) {
    for (let i = 0; i < to.length; i++) {
      const iter = this.records.length;
      this.records.push({
        iter: iter,
        from: this.records[iter - 1].to,
        to: to[i],
      });
    }
    return this.records.slice(
      this.records.length - to.length - 1,
      this.records.length - 1
    );
  }

  iterate(stop) {
    let l = this.records.length
    let cv = this.getNext(this.records[l - 1].to);
    while (cv !== NaN) {
      this.addRecord(cv);
      if (stop(cv)) {
        break
      }
      cv = this.getNext(cv);
    }
    return (this.records.length - l)
  }

  getVals() {
    let vals = [];
    for (let i = 0; i < this.records.length; i++) {
      vals.push(this.records[i].to);
    }
    return vals
  }
}

module.exports = Transforms;