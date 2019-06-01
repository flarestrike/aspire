export class Dnt {
  static ymd(s) {
    s = s.length === 6 ? '20' + s : s;
    return new Date(s.substr(0, 4), s.substr(4, 2), s.substr(6, 2));
  }
  static my(d, { months, fmt }) {
    const y = (d.getFullYear() % 2000 + '').padStart(2, '0');
    const m = (months[d.getMonth() + 1] + '').padStart(2, '0');
    return Dnt.remap({ y, m }, fmt);
  }
  static period(ds, du, pds) {
    const dys = (du.getTime() - ds.getTime()) / 86400_000;
    let yrs = Math.floor(dys / 365);
    let mos = Math.round((dys % 365) / 30);
    if (mos === 12) {
      mos = 0;
      yrs = yrs + 1;
    }
    const k = yrs === 0 ? 'm' : (mos === 0 ? 'y' : 'ym');
    return Dnt.remap({ yrs, mos }, pds[k]);
  }
  static remap(o, fmt) {
      return Object.keys(o).reduce((r, k) => {
          const v = o[k] === 'NaN' ? '-' : o[k];
          return r.replace('#' + k, v);
      }, fmt);
  }
}