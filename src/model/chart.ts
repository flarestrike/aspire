export class Chart {
  name = '';
  data: any = {};
  opts: any = {};
  constructor(name, data, opts) {
    this.name = name;
    this.data = data;
    this.opts = opts;
  }
}
