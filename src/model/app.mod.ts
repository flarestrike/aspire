export class AppMod {
  icon = '';
  textId = '';
  base = '';
  constructor(o?) {
    Object.assign(this, o);
  }
}

export const appMods = [
  { icon: 'app.badge',  textId: 'badge', base: '' },
  { icon: 'app.detail', textId: 'cards', base: 'portfolio' },
  { icon: 'app.meter',  textId: 'stats', base: 'stats' },
].map(i => new AppMod(i));
