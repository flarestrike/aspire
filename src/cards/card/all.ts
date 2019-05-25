import { InfoCard } from './info/info.card';
import { StackCard } from './stack/stack.card';
import { RoleCard } from './role/role.card';
import { EduCard } from './edu/edu.card';

export const cards = [
  EduCard, RoleCard,
  InfoCard, StackCard];
export const cardsMap = {
  edu: EduCard,
  role: RoleCard,
  info: InfoCard,
  stack: StackCard,
};
