class Transforms {
  constructor(init) {
    this.iterator = () => {
      throw new Error("No Initialized Iterator.");
    };
    this.initialized = false;
    if (init != undefined) {
      this.initialize(init);
    }
  }

  initialize(val) {
    if (typeof val != "number") {
      throw new Error(
        `Not initialized with number. ${typeof val} not supported.`
      );
    }
    this.records = [
      {
        iter: 0,
        from: NaN,
        to: val,
      },
    ];
    this.initialized = true;
  }

  addIterator(iterator) {
    this.iterator = iterator;
  }

  addRecord(to) {
    if (!this.initialized) {
      throw new Error("Not Initialized with a value");
    }
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
    if (!this.initialized) {
      throw new Error("Not Initialized with a value");
    }
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
    if (stop == undefined) {
      throw new Error("No Stopping Function.");
    }
    let l = this.records.length;
    let cv = this.getNext(this.records[l - 1].to);
    while (cv !== NaN) {
      this.addRecord(cv);
      if (stop(this.getVals())) {
        break;
      }
      cv = this.getNext(cv);
    }
    return this.records.length - l;
  }

  getVals() {
    let vals = [];
    for (let i = 0; i < this.records.length; i++) {
      vals.push(this.records[i].to);
    }
    return vals;
  }
}

module.exports = Transforms;
