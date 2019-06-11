import { PeriodLabelDef } from 'src/model';

export class LabelDef extends PeriodLabelDef {
  fmtPlace = '#city, #zone';
  info = 'Info';
  title = 'Title';
  name = 'Name';
  email = 'Email';
  era = 'Era';
  location = 'Location';
  duration = 'Duration';
  highlight = 'Highlight for';
  constructor(o?) {
    super();
    Object.assign(this, o);
  }
}
