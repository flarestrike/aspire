export class Str {
  static camelize(s) {
    return s.replace(/[\.|_]([a-zA-Z])/g, (m1, m2) => {
      return m2.toUpperCase();
    });
  }
}
