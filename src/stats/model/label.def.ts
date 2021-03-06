import { PeriodLabelDef } from 'src/model';

export class LabelDef extends PeriodLabelDef {
  lang = 'en';
  title = 'Stats';
  box = [{
    name: 'Pleces that I\'ve stayed, grouped by country',
    desc: 'Click on each marker to see the stayed time for each place.'
  }, {
    name: 'Top 10 languages/concepts ordered by used months',
    desc: 'The data is roughly calculated and may be over estimate.',
  }, {
    name: 'Familiar technology grouped by used months and selected topics',
    desc: 'Selected techs categorized with frontned/design/backend/project-management ordered clockwisely.',
  }, {
    name: 'Timespan ratio per Organisations',
    desc: 'Ordered by leaving time clockwisely'
  }, {
    name: 'Technologies used in each project over time',
    desc: 'The more recent project involves more complex technology stacks.',
  }];
  fmtPlace = '#city, #zone';
  timeStay = 'Time Stay';
  constructor(o?) {
    super();
    Object.assign(this, o);
  }
}
