import { InfoCard } from './info/info.card';
import { StackCard } from './stack/stack.card';
import { ExpCard } from './exp/exp.card';
import { EduCard } from './edu/edu.card';

export const cards = [
  EduCard, ExpCard,
  InfoCard, StackCard];
export const cardsMap = {
  edu: EduCard,
  exp: ExpCard,
  info: InfoCard,
  stack: StackCard,
};
