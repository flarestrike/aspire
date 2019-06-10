export class Chart {
  name = '';
  desc = '';
  data: any = {};
  opts: any = {};
  constructor(name, data, opts) {
    this.name = name;
    this.data = data;
    this.opts = opts;
    this.desc = opts.desc || '';
  }
}
