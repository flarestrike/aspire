export class LabelDef {
  lang = 'en';
  contact = 'Contact';
  summary = 'Summary';
  exp = 'Experiences';
  edu = 'Educations';
  info = {
    name: 'Name',
    email: 'Email',
    location: 'Location',
  };
  nav = {
    languages: 'Languages',
    view: 'View',
    all: 'Everything',
    pos: 'Positions',
    tags: 'All Tags'
  };
  fmtPlace = '#city, #zone';
  constructor(o?) {
    Object.assign(this, o);
  }
}
