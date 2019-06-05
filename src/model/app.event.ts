export class AppEvent {
  name = '';
  data: { [key: string]: string };
  constructor(n) {
    this.name = n;
  }
}
