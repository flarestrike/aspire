export class LabelDef {
  lang = 'en';
  badge = 'Badge';
  cards = 'Portfolio';
  stats = 'Stats';
  footer = {
    brand: 'Brand',
    claim: 'Claim blah blah blah...',
    power: 'Powered by ...',
  };
  constructor(o?) {
    Object.assign(this, o);
  }
}
