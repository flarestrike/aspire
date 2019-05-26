import { InfoCard, StackCard, RoleCard, EduCard } from 'src/model';
import { Profile } from 'src/model';

export class CardPlucker {
  pluck(p: Profile) {
    return [
      new InfoCard(p.info),
      ...p.stackList.map(n => new StackCard(n)).sort((a, b) => a.order < b.order ? 1 : -1),
      ...p.roleList.map(n => new RoleCard(n)),
      ...p.eduList.map(n => new EduCard(n)),
    ];
  }
}
