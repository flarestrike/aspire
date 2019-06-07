import { InfoCard, StackCard, RoleCard, EduCard } from 'src/model';
import { Profile, Card } from 'src/model';
import * as Fuse from 'fuse.js';

export class CardPlucker {
  find(cards: Card[], term) {
    if (!term) { return cards; }
    const options: Fuse.FuseOptions<Card> = {
      keys: ['text', 'type', 'org', 'duties.text',
        'location.zone', 'location.city',
        'locations.zone', 'locagtion.city'],
      shouldSort: false,
      tokenize: true,
      findAllMatches: true,
      threshold: 0.2,
      location: 0,
      distance: 20,
      maxPatternLength: 32,
      minMatchCharLength: 1,
    };
    const [info, ...rest] = cards;
    const fuse = new Fuse(rest, options);
    return [info, ...fuse.search(term)];
  }
  pluck(p: Profile) {
    if (!p.name) {
      return [];
    }
    return [
      new InfoCard(p.info),
      ...p.stackList.map(n => new StackCard(n)).sort((a, b) => a.order < b.order ? 1 : -1),
      ...p.roleList.map(n => new RoleCard(n)).sort((a, b) => a.duration.until < b.duration.until ? 1 : -1),
      ...p.eduList.map(n => new EduCard(n)).sort((a, b) => +a.duration.since < +b.duration.since ? 1 : -1),
    ];
  }
}
