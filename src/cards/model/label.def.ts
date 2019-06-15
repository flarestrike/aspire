import { PeriodLabelDef } from 'src/model';

export class LabelDef extends PeriodLabelDef {
  lang = 'en';
  fmtPlace = '#city, #zone';
  info = 'Info';
  title = 'Title';
  name = 'Name';
  email = 'Email';
  era = 'Era';
  summary = 'Summary';
  educations = 'Educations';
  experiences = 'Experiences';
  location = 'Location';
  duration = 'Duration';
  highlight = 'Highlight for';
  constructor(o?) {
    super();
    Object.assign(this, o);
  }
}
