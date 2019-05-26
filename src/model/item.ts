export class Item {
  text = '';
  color = '';
  icon = '';
  font = '';
  constructor(o?) {
    Object.assign(this, o);
  }
}
