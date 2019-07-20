import { ProfileConfig } from './profile.config';
import { InfoCard } from './info.card';
import { StackCard } from './stack.card';
import { RoleCard } from './role.card';
import { EduCard } from './edu.card';

class StackCardMap {
  [key: string]: StackCard
}
class RoleCardMap {
  [key: string]: RoleCard
}
class EduCardMap {
  [key: string]: EduCard
}

export class Profile {
  tags = ['Development', 'Frontend', 'Backend', 'Research', 'Leadership', 'Management'];
  id = '';
  config = new ProfileConfig();
  name: string;
  info: InfoCard;

  stacks: StackCardMap;
  stackList: StackCard[];

  roles: RoleCardMap;
  roleList: RoleCard[];

  edus: EduCardMap;
  eduList: EduCard[];

  orgList;
  constructor(o) {
    Object.assign(this, o);
    this.stackList = Object.values(o.stacks || {});
    this.roleList = Object.values(o.roles || {});
    this.eduList = Object.values(o.edus || {});
    const ol = this.roleList.reduce((r, i) => {
      const rl = r[i.org] || [];
      rl.push(i);
      r[i.org] = rl;
      return r;
    }, {});
    this.orgList = Object.keys(ol).map(k => ({ text: k, roleList: ol[k] }));
  }
}
