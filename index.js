class Transforms {
  constructor(init) {
    this.records = [{
      iter: 0,
      from: NaN,
      to: init,
    }, ];
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

  iterate(getNext, stopAt) {
    let cv = getNext(this.records[this.records.length - 1].to);
    while (cv !== NaN) {
      this.addRecord(cv);
      if (cv == stopAt) {
        break
      }
      cv = getNext(cv);
    }
  }

  getVals() {
    let vals = [];
    for (let i = 0; i < this.records.length; i++) {
      vals.push(this.records[i].to);
    }
  }
}

collatz = new Transforms(20);


collatz.iterate((val) => {
  if (typeof val != "number" || val == NaN) {
    v = NaN;
  }
  v = Math.floor(val);
  if (v < 1) {
    v = NaN;
  }
  if (v % 2 == 0) {
    v = v / 2;
  } else {
    v = 3 * v + 1
  }
  return v

}, 1);

console.log(collatz.records)