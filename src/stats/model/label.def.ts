export class LabelDef {
  fmtPlace = '#city, #zone';
  test = 'test';
  periods = {
    m: '#mosmos',
    y: '#yrsyrs',
    ym: '#yrsyrs#mosmos',
  };
  constructor(o?) {
    Object.assign(this, o);
  }
}
