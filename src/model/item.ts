export class Item {
  text = '';
  color = '';
  icon = '';
  font = '';
  tags = [];
  constructor(o?) {
    Object.assign(this, o);
  }
}
