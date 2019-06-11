export class PeriodLabelDef {
  months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  date = {
    short: '#m, #y'
  };
  periods = {
    m: '#mosmos',
    y: '#yrsyrs',
    ym: '#yrsyrs#mosmos',
  };
}
