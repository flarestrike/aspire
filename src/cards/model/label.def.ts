export class LabelDef {
  date = {
    short: '#m, #y'
  };
  periods = {
    m: '#mosmos',
    y: '#yrsyrs',
    ym: '#yrsyrs#mosmos',
  };
  info = 'Info';
  title = 'Title';
  name = 'Name';
  email = 'Email';
  era = 'Era';
  location = 'Location';
  duration = 'Duration';
  months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  constructor(o?) {
    Object.assign(this, o);
  }
}
