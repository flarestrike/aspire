import { Input, Component } from '@angular/core';

@Component({
  selector: 'csc-stack',
  templateUrl: './stack.card.html',
  styleUrls: ['./stack.card.sass']
})
export class StackCard {
  @Input() ctx;
}
