const mns = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class Dnt {
  static ymd(s) {
    s = s.length === 6 ? '20' + s : s;
    return new Date(s.substr(0, 4), s.substr(4, 2), s.substr(6, 2));
  }
  static my(d?) {
    if (!d) { return ''; }
    const y = (d.getFullYear() % 2000 + '').padStart(2, '0');
    const m = (mns[d.getMonth() + 1] + '').padStart(2, '0');
    return `${m}, ${y}`;
  }
}
