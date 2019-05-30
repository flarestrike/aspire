import { Output, EventEmitter, Input, Component, ViewChild } from '@angular/core';

import { PopAction, CtPopTag } from '@chakray/tags';
const actions = [new PopAction({ text: 'OK' })];

export class Poper {
  src = '';
  text = '';
}

@Component({
  selector: 'cs-sample-pop',
  templateUrl: './sample-pop.tag.html',
  styleUrls: ['./sample-pop.tag.sass']
})
export class CsSamplePopTag extends Poper {
  @ViewChild(CtPopTag) pop: CtPopTag;
  @Input() set poper(o) {
    ['src', 'text'].forEach(k => {
      this[k] = o[k];
    });
  }
  @Output() event = new EventEmitter();
  actions = actions;
  constructor() {
    super();
  }
  open() {
    return this.pop.open();
  }
  ext(k) {
    this.event.emit({ name: 'ext', data: k });
  }
}
