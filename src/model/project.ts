export class Sample {
  text = '';
  thumb = '';
  type = '';
  src = '';
  constructor(o?) {
    Object.assign(this, o);
    this.thumb = this.thumb || this.src;
  }
}

export class Project {
  text = '';
  summary = '';
  set samples(vs) {
    vs = vs || [];
    this._samples = vs.map(v => new Sample(v));
  }
  get samples() {
    return this._samples;
  }
  private _samples: Sample[] = [];
  constructor(o?) {
    Object.assign(this, o);
  }
}
