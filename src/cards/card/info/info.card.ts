import { Input, Component } from '@angular/core';

@Component({
  selector: 'csc-info',
  templateUrl: './info.card.html',
  styleUrls: ['./info.card.sass']
})
export class InfoCard {
  @Input() ctx;
}
