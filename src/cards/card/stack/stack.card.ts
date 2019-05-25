import { Input, Component } from '@angular/core';
import { StackCard as Model } from 'src/model';

@Component({
  selector: 'csc-stack',
  templateUrl: './stack.card.html',
  styleUrls: ['./stack.card.sass']
})
export class StackCard extends Model {
  constructor() {
    super({ type: 'stack' });
  }
}
