export class AppEvent {
  name = '';
  data: { [key: string]: string };
  constructor(n, d?) {
    this.name = n;
    if (d) {
      this.data = d;
    }
  }
}
