import { Str } from 'src/utils/str';

const texts = {
  lander: 'Badge',
  cards: 'Portfolio',
  digest: 'Résumé',
  stats: 'Stats',
};

export class AppMod {
  icon = '';
  mod = '';
  path = '';
  text = '';
  loadChildren = '';
  constructor(o?) {
    Object.assign(this, o);
    this.text = texts[o.mod];
    this.loadChildren = `src/${o.mod}#${Str.cap(o.mod)}Mod`;
  }
}

export class AppModMap {
  [key: string]: AppMod;
}

export const appMods = [
  { mod: 'lander', icon: 'app.badge',  path: '' },
  { mod: 'cards',  icon: 'app.folder', path: 'portfolio' },
  { mod: 'digest', icon: 'app.detail', path: 'digest' },
  { mod: 'stats',  icon: 'app.meter',  path: 'stats' },
].reduce((r, i) => {
  r[i.mod] = new AppMod(i);
  return r;
}, {} as AppModMap);
