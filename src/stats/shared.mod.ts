import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...tags],
  exports: [
    ...tags,
    CommonModule,
  ]
})
export class SharedMod {}
