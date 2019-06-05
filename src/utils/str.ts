export class Str {
  static camelize(s) {
    return s.replace(/[\.|_]([a-zA-Z])/g, (m1, m2) => {
      return m2.toUpperCase();
    });
  }
  static remap(o, fmt) {
      return Object.keys(o).reduce((r, k) => {
          const v = o[k] === 'NaN' ? '-' : o[k];
          return r.replace('#' + k, v);
      }, fmt);
  }
}
