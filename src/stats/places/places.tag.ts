import { Input, Component } from '@angular/core';

@Component({
  selector: 'st-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class PlacesTag {
  @Input() locs = [];
}
