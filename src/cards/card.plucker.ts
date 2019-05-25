import { InfoCard, ExpCard, EduCard } from 'src/model';
import { Profile } from 'src/model';

export class CardPlucker {
  pluck(p: Profile) {
    return [
      new InfoCard(p.info),
      // new Card({ type: 'stack', text: 'frontend' }),
      // new Card({ type: 'stack', text: 'backend' }),
      // new Card({ type: 'stack', text: 'design' }),
      // new Card({ type: 'stack', text: 'project management' }),
      // new ExpCard({ time: 'Apr', text: 'somethere' }),
      // new ExpCard({ time: 'Jun', text: 'sjaifd ' }),
      // new ExpCard({ time: 'Jan', text: 'asjdif ' }),
      // new ExpCard({ time: 'Apr', text: 'adjif jsidf ' }),
      // new EduCard({ time: 'May', text: 'asdfj aji' }),
      // new EduCard({ time: 'Sep', text: 'asdfj aji' }),
    ];
  }
}
