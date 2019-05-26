export class LabelDef {
  info = 'Info';
  name = 'Name';
  email = 'Email';
  era = 'Era';
  location = 'Location';
  duration = 'Duration';
  constructor(o?) {
    Object.assign(this, o);
  }
}
