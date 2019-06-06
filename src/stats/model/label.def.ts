export class LabelDef {
  fmtPlace = '#city, #zone';
  timeStay = 'Time Stay';
  periods = {
    m: '#mosmos',
    y: '#yrsyrs',
    ym: '#yrsyrs#mosmos',
  };
  constructor(o?) {
    Object.assign(this, o);
  }
}
