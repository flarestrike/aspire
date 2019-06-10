import { ProjectTech as Tech } from './project.tech';
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
  set tech(v) {
    this._tech = v.map(i => new Tech(i));
  }
  get tech() {
    return this._tech;
  }
  set samples(vs) {
    vs = vs || [];
    this._samples = vs.map(v => new Sample(v));
  }
  get samples() {
    return this._samples;
  }
  private _tech: Tech[] = [];
  private _samples: Sample[] = [];
  constructor(o?) {
    Object.assign(this, o);
  }
}
