export class Sample {
  text = '';
  thumb = '';
  type = '';
  src = '';
  constructor(o?) {
    Object.assign(this, o);
  }
}

export class Project {
  text = '';
  summary = '';
  set sample(vs) {
    vs = vs || [];
    this._samples = vs.map(v => new Sample(v));
  }
  get sample() {
    return this._samples;
  }
  private _samples: Sample[];
  constructor(o?) {
    Object.assign(this, o);
  }
}
