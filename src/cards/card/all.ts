import { InfoCard } from './info/info.card';
import { StackCard } from './stack/stack.card';
import { RoleCard } from './role/role.card';
import { EduCard } from './edu/edu.card';
import { ZoneCard } from './zone/zone.card';

export const cards = [
  EduCard, RoleCard, ZoneCard,
  InfoCard, StackCard];

export const cardsMap = {
  zone: ZoneCard,
  edu: EduCard,
  role: RoleCard,
  info: InfoCard,
  stack: StackCard,
};
