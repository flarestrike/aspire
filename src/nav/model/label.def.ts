export class LabelDef {
  lang = 'en';
  badge = 'Badge';
  cards = 'Portfolio';
  stats = 'Stats';
  notFoundMsg = 'Not found';
  notFoundAct = 'Back';
  footer = {
    claim: 'Claim blah blah blah...',
    power: 'Powered by ...',
  };
  constructor(o?) {
    Object.assign(this, o);
  }
}
