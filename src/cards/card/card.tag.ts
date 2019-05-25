import { Input, Component, HostBinding, OnInit,
  ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { cardsMap as cards } from './all';

@Component({
  selector: 'cs-card',
  templateUrl: './card.tag.html',
  styleUrls: ['./card.tag.sass', './base.theme.sass'],
})
export class CardTag implements OnInit {
  @Input() set data(v) {
    this.type = v.type;
    this.ctx = v;
  }
  @HostBinding('attr.type') type = '';
  ctx: any;
  @ViewChild('box', { read: ViewContainerRef }) box: ViewContainerRef;
  constructor(
    private fr: ComponentFactoryResolver) {
  }
  ngOnInit() {
    const cardTag = cards[this.type];
    if (!this.type || !cardTag) { return; }
    const factory = this.fr.resolveComponentFactory(cardTag);
    const ref = this.box.createComponent(factory);
    (ref.instance as any).ctx = this.ctx;
  }
}
