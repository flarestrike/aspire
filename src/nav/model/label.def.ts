export class LabelDef {
  footer = {
    brand: 'Brand',
    claim: 'Claim blah blah blah...',
    power: 'Powered by ...',
  };
  constructor(o?) {
    Object.assign(this, o);
  }
}
