import { InfoCard } from './info.card';
import { StackCard } from './stack.card';

class StackCardMap {
  [key: string]: StackCard

}

export class Profile {
  name = '';
  info: InfoCard;
  stacks: StackCardMap;
  stackList: StackCard[];
  constructor(o) {
    Object.assign(this, o);
    this.stackList = Object.values(o.stacks || {});
  }
}
