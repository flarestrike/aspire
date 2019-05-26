export class LabelDef {
  info = 'Info';
  title = 'Title';
  name = 'Name';
  email = 'Email';
  era = 'Era';
  location = 'Location';
  duration = 'Duration';
  constructor(o?) {
    Object.assign(this, o);
  }
}
